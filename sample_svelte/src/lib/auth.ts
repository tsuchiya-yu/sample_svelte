import { writable } from 'svelte/store';
import client from '../../lib/graphql/apollo';
import gql from 'graphql-tag';
import { getToken } from './tokenStorage';
import { goto } from '$app/navigation';

export const isLoggedIn = writable(false);

const IS_USER_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isUserLoggedIn
    }
`;

// ログイン済み？
export async function checkLoginStatus() {
    try {
        const token = getToken();
        if (token) {
            const { data } = await client.query({
                query: IS_USER_LOGGED_IN,
            });
            isLoggedIn.set(data.isUserLoggedIn);
        } else {
            isLoggedIn.set(false);
        }
    } catch (error) {
        console.error("エラー:", error);
        alert('エラーが発生しました。改めてログインしてください。');
        isLoggedIn.set(false);
        goto('/login');
    }
}
