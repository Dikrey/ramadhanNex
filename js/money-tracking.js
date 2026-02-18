
let moneyState = {
    balance: 0,
    startBalance: 0,
    transactions: [],
    balanceVisible: true,
    currentEditId: null,
    currentType: 'income' 
};

function loadMoneyState() {
    const saved = localStorage.getItem('ramadhan_money');
    if (saved) {
        moneyState = { ...moneyState, ...JSON.parse(saved) };
    }
}

function saveMoneyState() {
    localStorage.setItem('ramadhan_money', JSON.stringify(moneyState));
}


function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function toggleBalanceVisibility() {
    moneyState.balanceVisible = !moneyState.balanceVisible;
    updateMoneyUI();
    
    const eyeIcon = document.getElementById('balance-eye-icon');
    if (eyeIcon) {
        eyeIcon.className = moneyState.balanceVisible ? 'fas fa-eye' : 'fas fa-eye-slash';
    }
}

// Open add money modal
function openAddMoneyModal(type) {
    moneyState.currentType = type;
    moneyState.currentEditId = null;
    
    const modal = document.getElementById('money-modal');
    const title = document.getElementById('money-modal-title');
    const saveBtn = document.getElementById('money-save-btn');
    
    if (modal) modal.classList.add('active');
    if (title) title.textContent = type === 'income' ? 'Tambah Pemasukan' : 'Tambah Pengeluaran';
    if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-save mr-2"></i>Simpan';
    
    // Set default date to today
    const dateInput = document.getElementById('money-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
    
    // Reset form
    document.getElementById('money-amount').value = '';
    document.getElementById('money-category').value = '';
    document.getElementById('money-description').value = '';
    
    // Show only relevant categories
    updateCategoryOptions(type);
}

// Update category options based on type
function updateCategoryOptions(type) {
    const incomeGroup = document.getElementById('income-categories');
    const expenseGroup = document.getElementById('expense-categories');
    
    if (type === 'income') {
        if (incomeGroup) incomeGroup.style.display = '';
        if (expenseGroup) expenseGroup.style.display = 'none';
    } else {
        if (incomeGroup) incomeGroup.style.display = 'none';
        if (expenseGroup) expenseGroup.style.display = '';
    }
}

// Close money modal
function closeMoneyModal() {
    const modal = document.getElementById('money-modal');
    if (modal) modal.classList.remove('active');
}

// Save money transaction
function saveMoneyTransaction() {
    const amount = parseFloat(document.getElementById('money-amount').value);
    const category = document.getElementById('money-category').value;
    const description = document.getElementById('money-description').value;
    const date = document.getElementById('money-date').value;
    
    if (!amount || amount <= 0) {
        showToast('Masukkan jumlah yang valid', 'error');
        return;
    }
    
    if (!category) {
        showToast('Pilih kategori', 'error');
        return;
    }
    
    if (!date) {
        showToast('Pilih tanggal', 'error');
        return;
    }
    
    const transaction = {
        id: moneyState.currentEditId || Date.now(),
        type: moneyState.currentType,
        amount: amount,
        category: category,
        description: description || '-',
        date: date,
        timestamp: new Date().toISOString()
    };
    
    if (moneyState.currentEditId) {
        // Edit existing
        const index = moneyState.transactions.findIndex(t => t.id === moneyState.currentEditId);
        if (index !== -1) {
            moneyState.transactions[index] = transaction;
        }
    } else {
        // Add new
        moneyState.transactions.unshift(transaction);
    }
    
    calculateBalance();
    saveMoneyState();
    updateMoneyUI();
    closeMoneyModal();
    
    showToast(moneyState.currentEditId ? 'Transaksi diupdate' : 'Transaksi ditambahkan', 'success');
    
    // Add notification
    if (typeof addNotification === 'function') {
        const icon = moneyState.currentType === 'income' ? '💰' : '💸';
        addNotification(
            `${icon} ${moneyState.currentType === 'income' ? 'Pemasukan' : 'Pengeluaran'}`,
            `${formatCurrency(amount)} - ${getCategoryName(category)}`,
            'success'
        );
    }
}

// Calculate balance
function calculateBalance() {
    let income = 0;
    let expense = 0;
    
    moneyState.transactions.forEach(t => {
        if (t.type === 'income') {
            income += t.amount;
        } else {
            expense += t.amount;
        }
    });
    
    moneyState.balance = income - expense;
}

// Get category name
function getCategoryName(value) {
    const categories = {
        'gaji': 'Gaji',
        'bonus': 'Bonus',
        'hadiah': 'Hadiah',
        'lainnya-income': 'Lainnya',
        'makanan': 'Makanan & Minuman',
        'transport': 'Transportasi',
        'sedekah': 'Sedekah',
        'zakat': 'Zakat',
        'belanja': 'Belanja',
        'tagihan': 'Tagihan',
        'kesehatan': 'Kesehatan',
        'pendidikan': 'Pendidikan',
        'hiburan': 'Hiburan',
        'lainnya-expense': 'Lainnya'
    };
    return categories[value] || value;
}

// Get category icon
function getCategoryIcon(value) {
    const icons = {
        'gaji': '💰',
        'bonus': '🎁',
        'hadiah': '🎉',
        'lainnya-income': '💵',
        'makanan': '🍔',
        'transport': '🚗',
        'sedekah': '💝',
        'zakat': '🕌',
        'belanja': '🛒',
        'tagihan': '📱',
        'kesehatan': '⚕️',
        'pendidikan': '📚',
        'hiburan': '🎮',
        'lainnya-expense': '💸'
    };
    return icons[value] || '💰';
}

// Update money UI
function updateMoneyUI() {
    calculateBalance();
    
    const balanceEl = document.getElementById('money-balance');
    const incomeEl = document.getElementById('money-income');
    const expenseEl = document.getElementById('money-expense');
    
    // Calculate totals
    let totalIncome = 0;
    let totalExpense = 0;
    
    moneyState.transactions.forEach(t => {
        if (t.type === 'income') {
            totalIncome += t.amount;
        } else {
            totalExpense += t.amount;
        }
    });
    
    // Update display
    if (balanceEl) {
        balanceEl.textContent = moneyState.balanceVisible ? formatCurrency(moneyState.balance) : 'Rp ••••••';
    }
    if (incomeEl) {
        incomeEl.textContent = moneyState.balanceVisible ? formatCurrency(totalIncome) : 'Rp ••••';
    }
    if (expenseEl) {
        expenseEl.textContent = moneyState.balanceVisible ? formatCurrency(totalExpense) : 'Rp ••••';
    }
    
    // Render transactions
    renderTransactions();
    
    // Update charts
    updateMoneyCharts();
}

// Render transactions
function renderTransactions() {
    const container = document.getElementById('money-transactions');
    if (!container) return;
    
    if (moneyState.transactions.length === 0) {
        container.innerHTML = `
            <div class="text-center text-slate-400 py-8">
                <i class="fas fa-wallet text-4xl mb-2 opacity-50"></i>
                <p class="text-sm">Belum ada transaksi</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = moneyState.transactions.map(t => {
        const isIncome = t.type === 'income';
        const color = isIncome ? 'emerald' : 'rose';
        const icon = getCategoryIcon(t.category);
        const dateObj = new Date(t.date);
        const dateStr = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        
        return `
            <div class="glass-card p-4 hover:scale-[1.02] transition-transform">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3 flex-1">
                        <div class="w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center text-2xl">
                            ${icon}
                        </div>
                        <div class="flex-1">
                            <p class="font-bold text-slate-700">${getCategoryName(t.category)}</p>
                            <p class="text-xs text-slate-500">${t.description}</p>
                            <p class="text-xs text-slate-400 mt-1"><i class="far fa-calendar mr-1"></i>${dateStr}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="font-black text-lg text-${color}-600">${isIncome ? '+' : '-'}${formatCurrency(t.amount)}</p>
                        <div class="flex gap-2 mt-2">
                            <button onclick="editMoneyTransaction(${t.id})" class="text-xs text-blue-500 hover:text-blue-600">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onclick="deleteMoneyTransaction(${t.id})" class="text-xs text-rose-500 hover:text-rose-600">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Edit money transaction
function editMoneyTransaction(id) {
    const transaction = moneyState.transactions.find(t => t.id === id);
    if (!transaction) return;
    
    moneyState.currentEditId = id;
    moneyState.currentType = transaction.type;
    
    const modal = document.getElementById('money-modal');
    const title = document.getElementById('money-modal-title');
    const saveBtn = document.getElementById('money-save-btn');
    
    if (modal) modal.classList.add('active');
    if (title) title.textContent = transaction.type === 'income' ? 'Edit Pemasukan' : 'Edit Pengeluaran';
    if (saveBtn) saveBtn.innerHTML = '<i class="fas fa-save mr-2"></i>Update';
    
    // Fill form
    document.getElementById('money-amount').value = transaction.amount;
    document.getElementById('money-category').value = transaction.category;
    document.getElementById('money-description').value = transaction.description === '-' ? '' : transaction.description;
    document.getElementById('money-date').value = transaction.date;
    
    updateCategoryOptions(transaction.type);
}

// Delete money transaction
function deleteMoneyTransaction(id) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Hapus Transaksi?',
            text: 'Transaksi akan dihapus permanen',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, Hapus',
            cancelButtonText: 'Batal',
            confirmButtonColor: '#ef4444',
            customClass: {
                popup: 'glass-card'
            }
        }).then(result => {
            if (result.isConfirmed) {
                moneyState.transactions = moneyState.transactions.filter(t => t.id !== id);
                saveMoneyState();
                updateMoneyUI();
                showToast('Transaksi dihapus', 'success');
            }
        });
    } else {
        if (confirm('Hapus transaksi ini?')) {
            moneyState.transactions = moneyState.transactions.filter(t => t.id !== id);
            saveMoneyState();
            updateMoneyUI();
            showToast('Transaksi dihapus', 'success');
        }
    }
}

// Clear all transactions
function clearAllTransactions() {
    if (moneyState.transactions.length === 0) return;
    
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Hapus Semua Transaksi?',
            text: 'Semua transaksi akan dihapus permanen',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, Hapus Semua',
            cancelButtonText: 'Batal',
            confirmButtonColor: '#ef4444',
            customClass: {
                popup: 'glass-card'
            }
        }).then(result => {
            if (result.isConfirmed) {
                moneyState.transactions = [];
                moneyState.balance = 0;
                saveMoneyState();
                updateMoneyUI();
                showToast('Semua transaksi dihapus', 'success');
            }
        });
    } else {
        if (confirm('Hapus semua transaksi?')) {
            moneyState.transactions = [];
            moneyState.balance = 0;
            saveMoneyState();
            updateMoneyUI();
            showToast('Semua transaksi dihapus', 'success');
        }
    }
}

// Update money charts
function updateMoneyCharts() {
    if (typeof Chart === 'undefined') return;
    
    // Category chart (Pie)
    const categoryCanvas = document.getElementById('money-category-chart');
    if (categoryCanvas) {
        const ctx = categoryCanvas.getContext('2d');
        
        // Calculate category totals
        const categoryTotals = {};
        moneyState.transactions.forEach(t => {
            if (t.type === 'expense') {
                if (!categoryTotals[t.category]) {
                    categoryTotals[t.category] = 0;
                }
                categoryTotals[t.category] += t.amount;
            }
        });
        
        const labels = Object.keys(categoryTotals).map(k => getCategoryName(k));
        const data = Object.values(categoryTotals);
        
        // Destroy existing chart
        if (window.moneyCategoryChart) {
            window.moneyCategoryChart.destroy();
        }
        
        if (data.length > 0) {
            window.moneyCategoryChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            '#10b981', '#3b82f6', '#f59e0b', '#ef4444',
                            '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    }
    
    // Trend chart (Line) - Last 7 days
    const trendCanvas = document.getElementById('money-trend-chart');
    if (trendCanvas) {
        const ctx = trendCanvas.getContext('2d');
        
        // Get last 7 days
        const last7Days = [];
        const incomeData = [];
        const expenseData = [];
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            last7Days.push(date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }));
            
            let dayIncome = 0;
            let dayExpense = 0;
            
            moneyState.transactions.forEach(t => {
                if (t.date === dateStr) {
                    if (t.type === 'income') {
                        dayIncome += t.amount;
                    } else {
                        dayExpense += t.amount;
                    }
                }
            });
            
            incomeData.push(dayIncome);
            expenseData.push(dayExpense);
        }
        
        // Destroy existing chart
        if (window.moneyTrendChart) {
            window.moneyTrendChart.destroy();
        }
        
        window.moneyTrendChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: last7Days,
                datasets: [
                    {
                        label: 'Pemasukan',
                        data: incomeData,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Pengeluaran',
                        data: expenseData,
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'Rp ' + (value / 1000) + 'k';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Initialize money tracking
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        loadMoneyState();
        updateMoneyUI();
    });
}
