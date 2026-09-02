Get-ChildItem -Recurse -Filter *.tsx src | ForEach-Object {
    $c = Get-Content $_.FullName -Raw
    $c = [System.Text.RegularExpressions.Regex]::Replace($c, 'text-slate-900\s+', '')
    Set-Content $_.FullName $c
}
