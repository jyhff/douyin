$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$url = "http://localhost:5173/?screen=17"
$file = "C:\Users\Admin\Desktop\DouYin\screenshots\screen_17.png"
Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--screenshot=$file", "--window-size=1200,950", $url -Wait
Write-Host "Screen 17 recaptured successfully!"
