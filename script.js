document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const appName = "Data Checker V3".toLowerCase();
    
    if (searchTerm.length > 0 && !appName.includes(searchTerm)) {
        document.querySelector('.app-card').style.opacity = '0.3';
    } else {
        document.querySelector('.app-card').style.opacity = '1';
    }
});
