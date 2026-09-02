Get-ChildItem -Recurse -Filter *.tsx src | ForEach-Object {
    $c = Get-Content $_.FullName -Raw
    
    # Remove any dark: modifier and the slate class before it
    $c = [System.Text.RegularExpressions.Regex]::Replace($c, '(?:[a-z0-9:-]+)?slate-[0-9]+(?:/[0-9]+)?\s+dark:([a-z0-9:\-\/\[\]\.]+)', '$1')
    
    # Also clean up the weird double darks like dark:text-slate-900 dark:text-white/40
    $c = [System.Text.RegularExpressions.Regex]::Replace($c, 'dark:text-slate-[0-9]+\s+dark:', 'dark:')
    
    # Final strip of any standalone dark:
    $c = [System.Text.RegularExpressions.Regex]::Replace($c, 'dark:([a-z0-9:\-\/\[\]\.]+)', '$1')
    
    # Strip bg-slate-50 if it was left over
    $c = [System.Text.RegularExpressions.Regex]::Replace($c, 'bg-slate-50\s+', '')
    
    Set-Content $_.FullName $c
}
