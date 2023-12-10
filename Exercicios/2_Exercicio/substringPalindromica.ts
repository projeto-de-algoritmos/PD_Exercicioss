export default function longestPalindrome(s: string): string {
    const n = s.length;
    let inicio = 0;
    let comprimentoMaximo = 1;

    const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;

            if (len === 2 && s[i] === s[j]) {
                dp[i][j] = true;
                inicio = i;
                comprimentoMaximo = len;
            } else if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true;
                inicio = i;
                comprimentoMaximo = len;
            }
        }
    }

    return s.substring(inicio, inicio + comprimentoMaximo);
}