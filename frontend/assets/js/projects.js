/**
 * Projects Module
 * Handles project filtering and display
 */

const Projects = (() => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.getElementById('projects-grid');
    
    /**
     * Initialize projects functionality
     */
    const init = () => {
        if (filterBtns.length === 0 || projectCards.length === 0) return;
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });
    };
    
    /**
     * Handle filter button click
     */
    const handleFilterClick = (e) => {
        const filterValue = e.target.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        // Filter projects
        filterProjects(filterValue);
    };
    
    /**
     * Filter projects by category
     */
    const filterProjects = (category) => {
        projectCards.forEach((card, index) => {
            const cardCategory = card.getAttribute('data-category');
            const shouldShow = category === 'all' || cardCategory === category;
            
            if (shouldShow) {
                // Show with animation
                setTimeout(() => {
                    card.classList.remove('hidden');
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, index * 50);
            } else {
                // Hide with animation
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 300);
            }
        });
    };
    
    /**
     * Get projects by category
     */
    const getProjectsByCategory = (category) => {
        if (category === 'all') {
            return Array.from(projectCards);
        }
        return Array.from(projectCards).filter(card => 
            card.getAttribute('data-category') === category
        );
    };
    
    /**
     * Get all unique categories
     */
    const getAllCategories = () => {
        const categories = new Set();
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (category) categories.add(category);
        });
        return Array.from(categories);
    };
    
    /**
     * Sort projects by a property
     */
    const sortProjects = (property, ascending = true) => {
        const sortedCards = Array.from(projectCards).sort((a, b) => {
            const aValue = a.getAttribute(`data-${property}`);
            const bValue = b.getAttribute(`data-${property}`);
            
            if (ascending) {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        });
        
        // Reorder in DOM
        sortedCards.forEach(card => {
            projectsGrid.appendChild(card);
        });
    };
    
    /**
     * Search projects
     */
    const searchProjects = (query) => {
        const lowerQuery = query.toLowerCase();
        
        projectCards.forEach(card => {
            const title = card.querySelector('.project-title').textContent.toLowerCase();
            const description = card.querySelector('.project-description').textContent.toLowerCase();
            
            const matches = title.includes(lowerQuery) || description.includes(lowerQuery);
            
            card.style.opacity = matches ? '1' : '0.3';
            card.style.pointerEvents = matches ? 'auto' : 'none';
        });
    };
    
    /**
     * Reset all filters
     */
    const resetFilters = () => {
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === 'all') {
                btn.classList.add('active');
            }
        });
        
        filterProjects('all');
    };
    
    return {
        init,
        filterProjects,
        getProjectsByCategory,
        getAllCategories,
        sortProjects,
        searchProjects,
        resetFilters
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', Projects.init);
} else {
    Projects.init();
}
