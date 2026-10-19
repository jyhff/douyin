$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$screens = @("6", "9", "15", "17")

foreach ($s in $screens) {
    $url = "http://localhost:5173/?screen=$s"
    $file = "C:\Users\Admin\Desktop\DouYin\screenshots\screen_$s.png"
    Write-Host "Recapturing screen $s -> $file"
    Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--screenshot=$file", "--window-size=1200,950", $url -Wait
}
Write-Host "Recaptured screens 6, 9, 15, 17 done!"
