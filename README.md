# jual-beli-orang-bekasi
### web jual beli lu jual gua beli

Cekidot[http://skytria.github.io/jual-beli-orang-bekasi/]


<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Existing styles... */


    </style>
</head>

<body>
    <!-- Underwater decorations -->
    <div class="underwater-decor coral-reef"></div>
    <div class="underwater-decor shipwreck"></div>
    
    <!-- Bubbles -->
    <div id="bubbles-container"></div>
    
    <!-- Fish decorations -->
    <i class="fish fas fa-fish"></i>
    <i class="fish fas fa-fish"></i>
    <i class="fish fas fa-fish"></i>
    <i class="fish fas fa-fish"></i>
    <i class="fish fas fa-fish"></i>

    <div>
        <!-- Your existing content... -->
    </div>

    <script>
        // Generate random bubbles
        function createBubbles() {
            const container = document.getElementById('bubbles-container');
            for (let i = 0; i < 20; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                bubble.style.left = `${Math.random() * 100}vw`;
                bubble.style.width = `${5 + Math.random() * 10}px`;
                bubble.style.height = bubble.style.width;
                bubble.style.animationDuration = `${5 + Math.random() * 15}s`;
                bubble.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(bubble);
            }
        }

        // Replace with actual image URLs
        function loadDecorations() {
            // These are placeholder URLs - replace with actual image paths
            document.querySelector('.coral-reef').style.backgroundImage = 
                'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)';
            
            document.querySelector('.shipwreck').style.backgroundImage = 
                'url(https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)';
        }

        window.onload = function() {
            createBubbles();
            loadDecorations();
        };
    </script>
</body>
</html>