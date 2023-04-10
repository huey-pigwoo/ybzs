export const selectCardTemp = type =>{
    // 获取卡片底部的样式模版
    switch(type) {
        case 'business':
            return 'BusinessTemp';
        case 'animal':
            return 'AnimalTemp';
        case 'company':
            return 'CompanyTemp';
        default: return
    }
}