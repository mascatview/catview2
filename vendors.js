const vendors_version = 'от 14/06/20';
const vendors = [
    new Vendor('Avon', () => {
        return 'http://promoavon.ru/cats/cat' + getCatalogNumberId() + '' + year + '/medium/' + currentPage + '.jpg';
    }, () => {
        if(currentPage == 1) {
            return 'а 1';
        }
        var multiplied = currentPage*2;
        return 'ы ' + (multiplied-2) + '-' + (multiplied-1);
    }, (page) => {
        if(page == 0) {
            return 0;
        }
        if(page == 1) {
            return 1;
        }
        if(page % 2 === 0) {
            return (page/2)+1;
        } else {
            return ((page-1)/2)+1;
        }
    }),
    new Vendor('Avon #2', () => {
        return 'https://katalog-j.ru/images/katalogi-20' + year + '/' + catalogNumber + '_1/' + getCurrentPageId() + '.jpg';
    }),
    new Vendor('Avon #3', () => {
        return 'https://avon-ii.ru/images/' + catalogNumber + '-20' + year + '/avon-' + catalogNumber + '-20' + year + '-ru-' + getCurrentPageId() + '.jpg';
    }),
    new Vendor('Avon #4', () => {
        return 'https://katalogavon.info/katalogavon' + catalogNumber + 'ru/avon' + catalogNumber + '20' + year + 'page' + currentPage + '.jpg';
    }, true),
    new Vendor('Avon Фокус', () => {
        return 'https://katalog-j.ru/images/avon-mini-kat-20' + year + '/F' + catalogNumber + '/' + getCurrentPageId().toString().slice(-2) + '.jpg';
    }),
    new Vendor('Avon Фокус (только 9/2020)', () => {
        return 'https://katalog-j.ru/images/avon-mini-kat-20' + year + '/F' + catalogNumber + '/' + getCurrentPageId() + '.jpg';
    }, null, null, true),
    new Vendor('Avon Фокус (до 9/2020)', () => {
        return 'https://katalog-j.ru/images/avon-mini-kat-20' + year + '/F' + catalogNumber + '/' + getCurrentPageId().toString().slice(-2) + '.jpg';
    }, null, null, true),
    new Vendor('Avon Распродажа', () => {
        return 'https://katalog-j.ru/images/avon-mini-kat-20' + year + '/R' + catalogNumber + '/' + getCurrentPageId().toString().slice(-2) + '.jpg';
    }),
    new Vendor('Avon Распродажа (только 9/2020)', () => {
        return 'https://katalog-j.ru/images/avon-mini-kat-20' + year + '/R' + catalogNumber + '/' + currentPage + '.jpg';
    }, null, null, true),
    new Vendor('Avon Распродажа (до 9/2020)', () => {
        return 'https://catalog-n.com/images/avon-autlet/' + catalogNumber  + '/Avon-rasprodazha-' + catalogNumber + '-page-' + getCurrentPageId().toString().slice(-2) + '.jpg';
    }, null, null, true),
    new Vendor('Oriflame', () => {
        return 'https://i.webori.ru/20' + year + '/' + getCatalogNumberId() + '/s/' + currentPage + '.jpg';
    }),
    new Vendor('Oriflame #2', () => {
        return 'https://i.webori.ru/20' + year + '/' + getCatalogNumberId() + '/' + currentPage + '.jpg';
    }),
    new Vendor('Oriflame #3', () => {
        return 'https://i.webori.ru/20' + year + '/' + getCatalogNumberId() + '/_s_/' + currentPage + '.jpg';
    }),
    new Vendor('Faberlic', () => {
        return 'https://kabinet-faberlic.com/flipbook/catalog-faberlic-' + catalogNumber + '-20' + year + '-russia/files/mobile/' + currentPage + '.jpg';
    }),
    new Vendor('Cosmopolitan', () => {
        return 'https://smotret-listat.ru/images/Cosm-ru-' + catalogNumber + '-20' + year + '/cosmopolitan-' + catalogNumber + '-20' + year + '-' + getCurrentPageId() + '.jpg';
    }),
    new Vendor('Караван', () => {
        return 'https://catalog-n.com/images/karavan/' + catalogNumber + '/karavan-istorij-' + catalogNumber + '-' + getCurrentPageId() + '.jpg';
    })
];

window.onload = () => {
    catview_init();
};