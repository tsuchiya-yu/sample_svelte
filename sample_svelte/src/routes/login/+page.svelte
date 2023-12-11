<script lang="ts">
import { gql } from 'graphql-tag';
import client from '../../../lib/graphql/apollo';
import { goto } from '$app/navigation';

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
    <h1 class="text-3xl font-bold mb-6">ログイン</h1>
    <form on:submit|preventDefault={handleLogin}>
        <span class='flex items-center'>
            <label for='email' class='text-sm font-bold leading-snug'>メールアドレス</label>
        </span>
        <div class='inline-flex w-full items-center bg-primary rounded cursor-text overflow-hidden relative mb-6'>
            <input id='email' required type="email" bind:value={email} placeholder="hanako@example.com" class='border-gray-700 text-left appearance-none bg-transparent text-primary block flex-auto outline-none p-4 w-full bg-primary border border-primary rounded box-border text-base font-normal leading-snug m-0'>
        </div>
        <span class='flex items-center mb-1'>
            <label for='password' class='text-sm font-bold leading-snug'>パスワード</label>
        </span>
        <div class='inline-flex w-full items-center bg-primary rounded cursor-text overflow-hidden relative'>
            <input id='password' required type="password" bind:value={password} placeholder="1234abcd!" class='border-gray-700 text-left appearance-none bg-transparent text-primary block flex-auto outline-none p-4 w-full bg-primary border border-primary rounded box-border text-base font-normal leading-snug m-0'>
        </div>
        <div class='w-full h-11 text-base font-bold inline-flex items-center my-6'>
            <button type="submit" disabled={!email || !password} class='bg-rose-600 text-white inline-flex items-center justify-center border border-transparent rounded px-4 py-3 w-full text-center transition duration-100 ease-in-out align-middle overflow-hidden whitespace-nowrap break-words'>ログイン</button>
        </div>
    </form>
</div>