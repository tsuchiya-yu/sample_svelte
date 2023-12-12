<script lang="ts">
    import { gql } from 'graphql-tag';
    import client from '../../../lib/graphql/apollo';
    import { goto } from '$app/navigation';
    import InputField from '$lib/components/InputField.svelte';
    import InputLabel from '$lib/components/InputLabel.svelte';
    import Button from '$lib/components/Button.svelte';
    import Heading from '$lib/components/Heading.svelte';
    
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
            if (data.signIn.token) {
                console.log('ログイン成功:', data.signIn.token);
                // TODO:ログイン後の処理
                // ・ローカルストレージにトークンを保存
                // ・マイペにリダイレクト
                goto('/');
            }
        } catch (error) {
            console.error('ログインエラー:', error);
            alert('メールアドレスかパスワードが違います');
        }
    }
    </script>
    
    <div class='relative flex-grow w-full max-w-xl mx-auto p-6 lg:p-8'>
        <Heading text="ログイン" />
        <form on:submit|preventDefault={handleLogin}>
            <InputLabel forId="email" text="メールアドレス" />
            <InputField id="email" type="email" placeholder="hanako@example.com" bind:value={email} required/>
            <InputLabel forId="password" text="パスワード" />
            <InputField id="password" type="password" placeholder="1234abcd!" bind:value={password} required/>
            <Button text="ログイン" disabled={!email || !password} />
        </form>
    </div>