define([

    'jquery',

    'popup'

], function($, popup) {
    var text = 'Учёные-физики из Массачусетского технологического института (MIT) ' +
        'построили первый в мире фермионный микроскоп. Охлаждаемые в эксперименте с помощью ' +
        'двух лазеров с различными длинами волн, атомы калия 40K переходят на всё более низкие ' +
        'энергетические уровни. При этом фермионы испускают фотоны, которые улавливаются микроскопом ' +
        'и дают картинку.Вся известная нам материя состоит из бозонов и фермионов. Фермионы формируют ' +
        'материю – это кварки, из которых состоят протоны и нейтроны, которые сами по себе являются ' +
        'фермионами, а также лептоны (электроны, мюоны, тау-лептоны, нейтрино). Бозоны – это переносчики' +
        ' взаимодействия (фотоны, глюоны, W и Z-бозоны, и тот самый бозон Хиггса).В Гарвардском университете ' +
        'учёным удалось построить бозонный микроскоп в 2009 году, а в 2010 году их работу повторили в Институте ' +
        'квантовой оптики им. Макса Планка. А вот увидеть в микроскоп фермионы до сей поры не удавалось. Мешал ' +
        'принцип запрета Паули, согласно которому в замкнутой квантовой системе два и более тождественных фермиона ' +
        '(частицы с полуцелым спином) не могут одновременно находиться в одном квантовом состоянии. Потому попытки ' +
        'охладить облако фермионов приводили к тому, что все они выстраивались на разных энергетических уровнях, ' +
        'и обладавшие наибольшей энергией частицы охладить далее было невозможно.';

    return {
        start: function() {
            $(function() {
                popup.open('Заголовок', text, function() {
                    alert('Попап закрыт!');
                });
            });
        }
    }
});