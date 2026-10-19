$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outDir = "C:\Users\Admin\Desktop\DouYin\screenshots"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force
}

$screens = @("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "14", "15", "16", "17")

foreach ($s in $screens) {
    $url = "http://localhost:5173/?screen=$s"
    $file = "$outDir\screen_$s.png"
    Write-Host "Capturing screen $s -> $file"
    Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--screenshot=$file", "--window-size=1200,950", $url -Wait
}
Write-Host "All screenshots done!"
