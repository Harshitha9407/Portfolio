$content = Get-Content src\components\Projects.tsx -Raw
$content = $content -replace 'image\?: string;', "image?: string;
  desc?: string;
  customVisual?: React.ReactNode;
  color?: string;
  borderColor?: string;
  textColor?: string;
  bgColor?: string;"
Set-Content src\components\Projects.tsx $content
