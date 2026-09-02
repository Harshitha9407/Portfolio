$content = Get-Content src\components\ThemeProvider.tsx -Raw
$content = $content -replace 'import \{ type ThemeProviderProps \} from "next-themes/dist/types";', ''
$content = $content -replace 'ThemeProviderProps', 'React.ComponentProps<typeof NextThemesProvider>'
Set-Content src\components\ThemeProvider.tsx $content
