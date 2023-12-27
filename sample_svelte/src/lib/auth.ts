import { writable } from 'svelte/store';
import client from '../../lib/graphql/apollo';
import gql from 'graphql-tag';
import { getToken } from './tokenStorage';
import { goto } from '$app/navigation';
import { GetCurrentUserDoc }  from '../graphql/generated';

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

// ログイン済みユーザの情報を取得
export async function currentUser() {
    try {
        const token = getToken();
        if (token) {
            const { data } = await client.query({
                query: GetCurrentUserDoc,
            });
            console.log(data, data.currentUser);
            return data.currentUser;
        } else {
            return null;
        }
    } catch (error) {
        console.error("エラー:", error);
        alert('エラーが発生しました。改めてログインしてください。');
        isLoggedIn.set(false);
        goto('/login');
    }
}
