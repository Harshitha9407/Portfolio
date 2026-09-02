$content = Get-Content src\components\Projects.tsx -Raw
$splitIndex = $content.IndexOf('export function Projects()')
$visuals = $content.Substring(0, $splitIndex)
$main = $content.Substring($splitIndex)

$main = $main -replace 'bg-\[\#0A0F18\]', 'bg-slate-50 dark:bg-[#0A0F18]'
$main = $main -replace 'border-white/5', 'border-slate-200 dark:border-white/5'
$main = $main -replace 'border-white/10', 'border-slate-300 dark:border-white/10'
$main = $main -replace 'text-white/40', 'text-slate-500 dark:text-white/40'
$main = $main -replace 'text-white/50', 'text-slate-500 dark:text-white/50'
$main = $main -replace 'text-white/70', 'text-slate-600 dark:text-white/70'
$main = $main -replace 'text-white ', 'text-slate-900 dark:text-white '
$main = $main -replace 'text-white"', 'text-slate-900 dark:text-white"'
$main = $main -replace 'bg-white/\[0\.02\]', 'bg-slate-100 dark:bg-white/[0.02]'
$main = $main -replace 'hover:bg-white/5', 'hover:bg-slate-200 dark:hover:bg-white/5'
$main = $main -replace 'hover:text-white/80', 'hover:text-slate-800 dark:hover:text-white/80'
$main = $main -replace 'hover:text-white"', 'hover:text-slate-900 dark:hover:text-white"'
$main = $main -replace 'hover:border-white/10', 'hover:border-slate-300 dark:hover:border-white/10'
$main = $main -replace 'bg-black', 'bg-slate-200 dark:bg-black'

$newContent = $visuals + $main
Set-Content src\components\Projects.tsx $newContent
