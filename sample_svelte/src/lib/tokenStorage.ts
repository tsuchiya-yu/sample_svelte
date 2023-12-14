// トークンをlocalStorageに保存
export function saveToken(token: string) {
    localStorage.setItem('token', token);
}

// localStorageからトークンを取得
export function getToken(): string | null {
    return localStorage.getItem('token');
}

// localStorageからトークンを削除
export function removeToken() {
    localStorage.removeItem('token');
}