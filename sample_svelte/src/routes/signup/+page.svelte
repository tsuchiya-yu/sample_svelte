<script lang="ts">
    import { gql } from 'graphql-tag';
    import client from '../../../lib/graphql/apollo';
    import { goto } from '$app/navigation';
    import InputField from '$lib/components/InputField.svelte';
    import InputLabel from '$lib/components/InputLabel.svelte';
    import Button from '$lib/components/Button.svelte';
    import CustomLink from '$lib/components/CustomLink.svelte';
    import Heading from '$lib/components/Heading.svelte';

    let email = '';
    let name = '';
    let password = '';
    let confirmPassword = '';

    const SIGN_UP = gql`
    mutation CreateUser($email: String!, $password: String!, $name: String!) {
        createUser(data: {name: $name, email: $email, password: $password }) {
            id
            email
            password
            name
        }
    }
    `;

    async function signUp() {
        if (password !== confirmPassword) {
            alert('パスワードとパスワード(確認)が一致しません');
            return;
        }

        try {
            const { data } = await client.mutate({
                mutation: SIGN_UP,
                variables: { email, password, name },
            });
            if (data.createUser) {
                console.log('サインアップ成功:', data.createUser);
                goto('/'); // 遷移先を適切に設定
            }
        } catch (error) {
            console.error('サインアップエラー:', error);
            alert('会員登録に失敗しました。登録済みのメールアドレスです。');
        }
    }
</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
    <Heading text="会員登録" />
    <form on:submit|preventDefault={signUp}>
        <InputLabel forId="name" text="ニックネーム" />
        <InputField id="name" type="text" placeholder="はなこ" bind:value={name} required/>
        <InputLabel forId="email" text="メールアドレス" />
        <InputField id="email" type="email" placeholder="hanako@example.com" bind:value={email} required/>
        <InputLabel forId="password" text="パスワード" />
        <InputField id="password" type="password" placeholder="1234abcd!" bind:value={password} required/>
        <InputLabel forId="confirmPassword" text="パスワード(確認)" />
        <InputField id="confirmPassword" type="password" placeholder="1234abcd!" bind:value={confirmPassword} required/>
        <Button text="会員登録する" type='submit' disabled={!email || !password || !confirmPassword || password !== confirmPassword} />
    </form>
    <CustomLink url="/login" text="ログインはこちら" />
</div>