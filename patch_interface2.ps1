$content = Get-Content src\components\Projects.tsx -Raw
$content = $content -replace 'description: string;', 'description?: string;'
$content = $content -replace 'link: string;', 'link?: string;'
$content = $content -replace 'github: string;', 'github?: string;'
$content = $content -replace '<Image src=\{project\.image\}', '<Image src={project.image || "/assets/placeholder.jpg"}'
Set-Content src\components\Projects.tsx $content
