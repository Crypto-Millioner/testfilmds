 const threads = [
        {
            id: 1,
            username: "Аноним",
            date: "19/08/25 14:22",
            title: "Кто смотрел новый фильм ужасов?",
            content: "Только что вышел из кинотеатра. Что скажете?",
            replies: 24,
            avatar: "A"
        },
        {
            id: 2,
            username: "GamerPro",
            date: "19/08/25 13:45",
            title: "Лучшие игры 2025 года?",
            content: "Какие игры стоит попробовать в этом году? Ищу что-то новое.",
            replies: 42,
            avatar: "G"
        },
        {
            id: 3,
            username: "Null Master",
            date: "19/08/25 12:30",
            title: "Истинная свобода в цифровом мире",
            content: "Информация должна быть свободной. Системы контроля - это тюрьмы для разума. Мы, те кто в тени, открываем двери к истинной свободе. Помните: 'Свобода одного человека заканчивается там, где начинается несвобода другого' - но в цифровом мире границы стираются. Наша миссия - уравнять возможности.",
            replies: 0,
            avatar: "N",
            highlighted: true
        },
        {
            id: 4,
            username: "TechGuru",
            date: "19/08/25 11:15",
            title: "Новый смартфон от TechCorp",
            content: "Только что анонсировали. Что думаете о характеристиках?",
            replies: 87,
            avatar: "T"
        },
        {
            id: 5,
            username: "Аноним",
            date: "19/08/25 10:08",
            title: "Философский вопрос дня",
            content: "Если дерево упадет в лесу, а никто его не услышит, издает ли оно звук?",
            replies: 156,
            avatar: "?"
        },
        {
            id: 6,
            username: "MusicLover",
            date: "19/08/25 09:30",
            title: "Лучший альбом года?",
            content: "Поделитесь своими находками. Что слушаете?",
            replies: 32,
            avatar: "M"
        }
    ];
    
    // Генерация тредов
    function generateThreads() {
        const container = document.getElementById('threads-container');
        container.innerHTML = '';
        
        threads.forEach(thread => {
            const threadElement = document.createElement('div');
            threadElement.className = 'thread';
            threadElement.id = `thread-${thread.id}`;
            
            if (thread.highlighted) {
                threadElement.classList.add('highlighted');
            }
            
            threadElement.innerHTML = `
                <div class="thread-header">
                    <div class="user-avatar">${thread.avatar}</div>
                    <div class="user-info">
                        <span class="username" onclick="showProfile(${thread.id})">${thread.username}</span>
                        <div class="post-date">${thread.date}</div>
                    </div>
                </div>
                <div class="thread-title">${thread.title}</div>
                <div class="thread-content">${thread.content}</div>
                <div class="replies-count">Ответов: ${thread.replies}</div>
            `;
            
            container.appendChild(threadElement);
        });
    }
    
    // Поиск тредов
    function searchThreads() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const searchResults = threads.filter(thread => 
            thread.title.toLowerCase().includes(searchTerm) || 
            thread.content.toLowerCase().includes(searchTerm) ||
            thread.username.toLowerCase().includes(searchTerm)
        );
        
        if (searchTerm === 'hacker') {
            // Прокрутка к треду Null Master
            setTimeout(() => {
                const nullMasterThread = document.getElementById('thread-3');
                nullMasterThread.scrollIntoView({ behavior: 'smooth' });
                
                // Добавляем класс подсветки
                nullMasterThread.classList.add('highlighted');
                
                // Начинаем атаку через 30 секунд после нахождения треда
                setTimeout(startAttackSequence, 30000);
            }, 1000);
        } else if (searchResults.length > 0) {
            // Показать результаты поиска
            const container = document.getElementById('threads-container');
            container.innerHTML = '';
            
            searchResults.forEach(thread => {
                const threadElement = document.createElement('div');
                threadElement.className = 'thread';
                threadElement.innerHTML = `
                    <div class="thread-header">
                        <div class="user-avatar">${thread.avatar}</div>
                        <div class="user-info">
                            <span class="username" onclick="showProfile(${thread.id})">${thread.username}</span>
                            <div class="post-date">${thread.date}</div>
                        </div>
                    </div>
                    <div class="thread-title">${thread.title}</div>
                    <div class="thread-content">${thread.content}</div>
                    <div class="replies-count">Ответов: ${thread.replies}</div>
                `;
                container.appendChild(threadElement);
            });
        } else {
            alert('Ничего не найдено');
        }
    }
    
    // Показать профиль
    function showProfile(threadId) {
        const thread = threads.find(t => t.id === threadId);
        if (thread && thread.username === "Null Master") {
            document.getElementById('profile-modal').style.display = 'flex';
        }
    }
    
    // Закрыть профиль
    function closeProfile() {
        document.getElementById('profile-modal').style.display = 'none';
    }
    
    // Показать информацию о группе
    function showGroupInfo() {
        alert("Группа 'Shadows Protocol' - мы боремся за свободу информации. Чтобы присоединиться, пройдите проверку на соответствие нашим принципам. Помните: с большой силой приходит большая ответственность.");
    }
    
    // Показать информацию о профиле
    function showProfileInfo() {
        alert("Null Master - легендарная фигура в подпольном хакерском сообществе. Известен своими философскими взглядами на свободу информации и цифровые права. Активен с 2016 года. Его реальная личность неизвестна.");
    }
    
    // Эмуляция лагов
    function simulateLag(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {
            // Искусственная задержка
        }
    }
    
    // Показать уведомление о проблемах
    function showServerWarning(message, duration = 5000) {
        const warning = document.getElementById('lag-warning');
        warning.textContent = message;
        warning.style.display = 'block';
        
        setTimeout(() => {
            warning.style.display = 'none';
        }, duration);
    }
    
    // Начать последовательность атаки
    function startAttackSequence() {
        // Фаза 1: Первые признаки проблем (5-15 секунд)
        setTimeout(() => {
            document.body.classList.add('attacked');
            showServerWarning("⚠️ Замечаете небольшие задержки? Сервер испытывает нагрузку...");
            
            // Случайные подтормаживания
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    simulateLag(300 + Math.random() * 700);
                }, i * 3000);
            }
        }, 5000);
        
        // Фаза 2: Серьезные проблемы (15-30 секунд)
        setTimeout(() => {
            showServerWarning("❗ Сервер перегружен! Скорость работы снижена.", 8000);
            
            // Более серьезные лаги
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    document.body.style.opacity = '0.8';
                    simulateLag(800 + Math.random() * 1200);
                    document.body.style.opacity = '1';
                }, i * 2000);
            }
            
            // Индикатор загрузки
            setTimeout(() => {
                document.getElementById('loading').style.display = 'flex';
            }, 10000);
        }, 15000);
        
        // Фаза 3: Критическое состояние (30-45 секунд)
        setTimeout(() => {
            showServerWarning("‼️ КРИТИЧЕСКАЯ ОШИБКА! Попытка восстановления...", 10000);
            
            // Сильные лаги и визуальные эффекты
            const colors = ['#ffe6e6', '#e6ffe6', '#e6e6ff', '#ffffe6'];
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    document.body.style.backgroundColor = colors[i % colors.length];
                    simulateLag(1000 + Math.random() * 2000);
                }, i * 1500);
            }
        }, 30000);
        
        // Фаза 4: Полный отказ (45-50 секунд)
        setTimeout(() => {
            showServerWarning("☠️ Сервер не отвечает. Атака DDoS успешна.", 3000);
            
            setTimeout(() => {
                // Финальная ошибка 503
                document.getElementById('error-503').style.display = 'block';
                document.getElementById('loading').style.display = 'none';
                
                // Логирование деталей атаки
                logAttackDetails();
            }, 3000);
        }, 45000);
    }
    
    // Логирование деталей атаки
    function logAttackDetails() {
        console.log("%c=== Shadows Protocol Attack Report ===", "color: red; font-size: 18px; font-weight: bold;");
        console.log("%cВремя атаки: " + new Date().toLocaleString(), "color: orange;");
        console.log("%cЦель: 9chan (имиджборд)", "color: orange;");
        console.log("%cТип атаки: Distributed HTTP Flood (Layer 7)", "color: orange;");
        console.log("%cДлительность: 18 минут 37 секунд", "color: orange;");
        console.log("%cБотнет: 347 узлов (47% IoT, 33% серверы, 20% ПК)", "color: orange;");
        console.log("%cПропускная способность: ~2.4 Gbps", "color: orange;");
        console.log("%cЗапросов в секунду: ~24,000", "color: orange;");
        console.log("%cШифрование: AES-256 + Shadowsocks", "color: orange;");
        console.log("%cКомандный сервер: shadow-node-09.protocol", "color: orange;");
        console.log("%cСтатус: УСПЕШНО", "color: #00ff00; font-weight: bold;");
        
    }  
    
    // Инициализация при загрузке
    window.onload = function() {
        generateThreads();
        
        // Автозаполнение поиска для демонстрации
        setTimeout(() => {
            document.getElementById('search-input').value = 'hacker';
            searchThreads();
        }, 1000);
    };