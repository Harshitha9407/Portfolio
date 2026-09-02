$content = Get-Content src\components\FlowForge\FlowForgeHeroGraph.tsx -Raw
$content = $content -replace 'opacity=\{0\.1\}', 'style={{ opacity: 0.1 }}'
Set-Content src\components\FlowForge\FlowForgeHeroGraph.tsx $content
