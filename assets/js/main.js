// 倒计时计算函数
function updateCountdown() {
    const now = new Date();

    // 英语四级考试日期 (假设是2025年12月21日)
    const cet4Date = new Date('2025-12-21');
    const cet4Diff = Math.ceil((cet4Date - now) / (1000 * 60 * 60 * 24));

    // 2028考研日期 (2027年12月第一个周末，假设是2027年12月18日)
    const kaoyanDate = new Date('2027-12-18');
    const kaoyanDiff = Math.ceil((kaoyanDate - now) / (1000 * 60 * 60 * 24));

    // 更新显示
    const cet4Element = document.getElementById('cet4-countdown');
    const kaoyanElement = document.getElementById('kaoyan-countdown');

    if (cet4Element) {
        if (cet4Diff > 0) {
            cet4Element.textContent = `还有 ${cet4Diff} 天`;
            cet4Element.style.color = cet4Diff <= 30 ? '#f5576c' : '#667eea';
        } else {
            cet4Element.textContent = '已结束';
            cet4Element.style.color = '#999';
        }
    }

    if (kaoyanElement) {
        if (kaoyanDiff > 0) {
            const years = Math.floor(kaoyanDiff / 365);
            const days = kaoyanDiff % 365;
            // Update for compact layout: "X Years Y Days" -> "X年Y天"
            kaoyanElement.textContent = `${years}年${days}天`;
            kaoyanElement.style.color = '#667eea';
        } else {
            kaoyanElement.textContent = '已结束';
            kaoyanElement.style.color = '#999';
        }
    }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    // 每天更新一次
    setInterval(updateCountdown, 1000 * 60 * 60 * 24);
});
