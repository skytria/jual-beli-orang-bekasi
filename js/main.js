document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua elemen yang dibutuhkan
    const navLinks = document.querySelectorAll('.nav-link');
    const lobbyContainer = document.querySelector('.lobby-container');
    const marketSection = document.getElementById('market');
    const chatSellerSection = document.getElementById('chat-seller');
    const eMoneySection = document.getElementById('e-money');
    
    // Sembunyikan semua section kecuali lobby
    function hideAllSections() {
        lobbyContainer.classList.add('d-none');
        marketSection.classList.add('d-none');
        chatSellerSection.classList.add('d-none');
        eMoneySection.classList.add('d-none');
    }
    
    // Tampilkan section berdasarkan target
    function showSection(target) {
        hideAllSections();
        
        switch(target) {
            case 'market':
                marketSection.classList.remove('d-none');
                break;
            case 'chat-seller':
                chatSellerSection.classList.remove('d-none');
                break;
            case 'e-money':
                eMoneySection.classList.remove('d-none');
                break;
            default: // lobby
                lobbyContainer.classList.remove('d-none');
                break;
        }
    }
    
    // Tambahkan event listener untuk setiap link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target') || 'lobby';
            showSection(target);
            
            // Update active state (opsional)
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set lobby sebagai tampilan default
    showSection('lobby');
});