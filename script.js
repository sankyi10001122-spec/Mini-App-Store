// Search လုပ်ဆောင်ချက် (App တစ်ခုပဲရှိလို့ မှိန်သွားအောင် လုပ်ထားပါတယ်)
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const appName = "Data Checker V3".toLowerCase();
    
    // ရှာလိုက်တဲ့ စာသားက App နာမည်နဲ့ မကိုက်ညီရင် မှိန်သွားမယ်
    if (searchTerm.length > 0 && !appName.includes(searchTerm)) {
        document.querySelector('.app-card').style.opacity = '0.3';
    } else {
        document.querySelector('.app-card').style.opacity = '1';
    }
});
