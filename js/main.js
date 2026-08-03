// 重载复制函数，支持自定义弹窗提示文案
function copyText(text, tipMsg = "复制成功！打开QQ粘贴即可访问") {
    let tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    const toast = document.getElementById('toast');
    toast.innerText = tipMsg;
    toast.style.display = 'block';
    setTimeout(() => toast.style.display = 'none', 2000);
}
