$content = Get-Content src\components\Workbench.tsx -Raw

$content = $content -replace 'bg-\[\#0A0F18\]', 'bg-slate-50 dark:bg-[#0A0F18]'
$content = $content -replace 'border-white/5', 'border-slate-200 dark:border-white/5'
$content = $content -replace 'border-white/10', 'border-slate-300 dark:border-white/10'
$content = $content -replace 'text-white/40', 'text-slate-500 dark:text-white/40'
$content = $content -replace 'text-white/60', 'text-slate-600 dark:text-white/60'
$content = $content -replace 'text-white/70', 'text-slate-600 dark:text-white/70'
$content = $content -replace 'text-white/90', 'text-slate-800 dark:text-white/90'
$content = $content -replace 'text-white ', 'text-slate-900 dark:text-white '
$content = $content -replace 'text-white"', 'text-slate-900 dark:text-white"'
$content = $content -replace 'bg-white/5', 'bg-slate-200 dark:bg-white/5'
$content = $content -replace 'bg-white/\[0\.02\]', 'bg-slate-100 dark:bg-white/[0.02]'

Set-Content src\components\Workbench.tsx $content
