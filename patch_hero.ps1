$content = Get-Content src\components\Hero.tsx -Raw
$content = $content -replace 'const letterVariants = \{', 'const letterVariants: any = {'
Set-Content src\components\Hero.tsx $content
