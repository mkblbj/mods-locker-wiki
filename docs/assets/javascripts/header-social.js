// 在页面右上角搜索框右边添加社交链接 - v2.0
console.log('Header social script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, trying to add social links');
    
    function addHeaderSocial() {
        console.log('addHeaderSocial called');
        
        // 检查是否已经添加过了
        if (document.querySelector('.md-header-social')) {
            console.log('Social links already exist');
            return;
        }

        // 多种方式查找插入位置
        let insertTarget = null;
        const searchContainer = document.querySelector('.md-search');
        const headerInner = document.querySelector('.md-header__inner');
        const headerNav = document.querySelector('.md-header-nav');
        
        if (searchContainer) {
            insertTarget = searchContainer;
            console.log('Found search container');
        } else if (headerInner) {
            insertTarget = headerInner;
            console.log('Found header inner');
        } else if (headerNav) {
            insertTarget = headerNav;
            console.log('Found header nav');
        }
        
        if (!insertTarget) {
            console.log('No suitable insert target found');
            return;
        }

        // 创建社交链接容器
        const socialContainer = document.createElement('div');
        socialContainer.className = 'md-header-social';

        // 如果找到了搜索容器，就放在它右边
        if (searchContainer) {
            const searchRect = searchContainer.getBoundingClientRect();
            // 在搜索框右边留出合适的间距，避免重叠
            socialContainer.style.cssText = `
                position: fixed;
                top: 0.75rem;
                left: ${searchRect.right + 16}px;
                z-index: 9999;
                display: flex;
                gap: 0.4rem;
            `;
        } else {
            // 如果没找到搜索容器，用默认定位
            socialContainer.style.cssText = `
                position: fixed;
                top: 0.75rem;
                right: 1.5rem;
                z-index: 9999;
                display: flex;
                gap: 0.4rem;
            `;
        }

        // 社交链接数据
        const socialLinks = [
            {
                icon: 'fab fa-weixin',
                link: 'https://tc-new.z.wiki/autoupload/f/2Lce7mDTH2prz_SmJ39Zf412_FRYNb81z6UPhMWD8iI/20250911/lIA3/1194X1596/IMG_2531.JPG/webp',
                title: 'WeChat'
            },
            {
                icon: 'fas fa-envelope',
                link: 'mailto:mkblbjus@gmail.com',
                title: 'Email'
            },
            {
                icon: 'fab fa-discord',
                link: 'https://discord.gg/vw8wAZH6Sn',
                title: 'Discord'
            }
        ];

        // 创建社交链接
        socialLinks.forEach(social => {
            const link = document.createElement('a');
            link.href = social.link;
            link.title = social.title;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'md-header-social__link';
            link.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1.6rem;
                height: 1.6rem;
                color: white;
                text-decoration: none;
                opacity: 0.9;
                transition: opacity 0.2s ease;
            `;
            
            link.addEventListener('mouseenter', function() {
                this.style.opacity = '1';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.opacity = '0.9';
            });

            const icon = document.createElement('i');
            icon.className = social.icon;
            icon.style.cssText = `
                font-size: 1.2rem !important;
                font-weight: 500 !important;
            `;

            link.appendChild(icon);
            socialContainer.appendChild(link);
        });

        // 直接添加到body
        document.body.appendChild(socialContainer);
        console.log('Social links added to body');
        console.log('Social container:', socialContainer);
        console.log('Social links count:', socialLinks.length);
    }

    // 延迟执行确保页面完全加载
    setTimeout(addHeaderSocial, 100);
    setTimeout(addHeaderSocial, 500);
    setTimeout(addHeaderSocial, 1000);
    
    // 监听窗口大小变化，重新计算位置
    window.addEventListener('resize', function() {
        // 移除旧的社交链接
        const oldSocial = document.querySelector('.md-header-social');
        if (oldSocial) {
            oldSocial.remove();
        }
        // 重新添加
        setTimeout(addHeaderSocial, 100);
    });
    
    // 监听页面变化
    const observer = new MutationObserver(function() {
        setTimeout(addHeaderSocial, 100);
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
