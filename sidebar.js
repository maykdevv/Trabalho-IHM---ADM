document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos os itens
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
            
            // Oculta todos os painéis
            document.querySelectorAll('.content-panel').forEach(panel => {
                panel.style.display = 'none';
            });
            
            // Mostra o painel correspondente
            const targetPanel = this.getAttribute('data-panel');
            if (targetPanel) {
                document.getElementById(targetPanel).style.display = 'block';
            }
        });
    });
    
    // Mostra o painel principal por padrão
    document.getElementById('main-panel').style.display = 'block';
});