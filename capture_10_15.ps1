$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outDir = "C:\Users\Admin\Desktop\DouYin\screenshots"

$screens = @("10", "11", "12", "13", "14", "15")

foreach ($s in $screens) {
    $url = "http://localhost:5173/?screen=$s"
    $file = "$outDir\screen_$s.png"
    Write-Host "Capturing screen $s -> $file"
    Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--screenshot=$file", "--window-size=1200,950", $url -Wait
}
Write-Host "Done capturing 10-15!"
