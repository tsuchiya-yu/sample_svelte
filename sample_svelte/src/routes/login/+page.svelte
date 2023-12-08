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
    }
}
</script>

<form on:submit|preventDefault={handleLogin}>
    <h1 class="text-3xl font-bold">ログイン</h1>
    <label for='email'>メールアドレス</label>
    <input id='email' type="email" bind:value={email} placeholder="Email">
    <label for='password'>パスワード</label>
    <input id='password' type="password" bind:value={password} placeholder="Password">
    <button type="submit">ログイン</button>
</form>