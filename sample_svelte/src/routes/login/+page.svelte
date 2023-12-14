<script lang="ts">
    import { gql } from 'graphql-tag';
    import client from '../../../lib/graphql/apollo';
    import { goto } from '$app/navigation';
    import InputField from '$lib/components/InputField.svelte';
    import InputLabel from '$lib/components/InputLabel.svelte';
    import Button from '$lib/components/Button.svelte';
    import ButtonReverse from '$lib/components/ButtonReverse.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import CustomLink from '$lib/components/CustomLink.svelte';
    import Hr from '$lib/components/Hr.svelte';
    import { saveToken } from '$lib/tokenStorage';
    
    let email = '';
    let password = '';
    
    // TODO:このmutationは共通化したい
    const SIGN_IN = gql`
    mutation SignIn($email: String!, $password: String!) {
        signIn(data: { email: $email, password: $password }) {
        token
        }
    }
    `;
    
    // ログイン処理
    async function handleLogin() {
        try {
            const { data } = await client.mutate({
                mutation: SIGN_IN,
                variables: { email, password },
            });
            const token = data.signIn.token;
            if (token) {
                console.log('ログイン成功:', token);
                saveToken(token);
                // TODO:ログイン後の処理
                // ・マイペにリダイレクト
                goto('/');
            }
        } catch (error) {
            console.error('ログインエラー:', error);
            alert('メールアドレスかパスワードが違います');
        }
    }
    function navigateToSignup() {
        goto('/signup');
    }
</script>

<div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
    <Heading text="ログイン" />
    <form on:submit|preventDefault={handleLogin}>
        <InputLabel forId="email" text="メールアドレス" />
        <InputField id="email" type="email" placeholder="hanako@example.com" bind:value={email} required/>
        <InputLabel forId="password" text="パスワード" />
        <InputField id="password" type="password" placeholder="1234abcd!" bind:value={password} required/>
        <Button text="ログインする" type='submit' disabled={!email || !password} />
    </form>
    <CustomLink url="https://www.google.com/" text="パスワードを忘れた場合はこちら" />
    <div class='my-8'><Hr/></div>
    <ButtonReverse text="会員登録はこちら" on:click={navigateToSignup}/>
</div>