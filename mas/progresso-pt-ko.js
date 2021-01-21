$(document).ready(function () {
    //--- variáveis globais
    //--- funções globais
    $("#exampleInputDate2").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: 'yy/mm/dd',
        yearRange: "-10:+10"
    });
    //--- viewmodel - métodos e dados
    function MyViewModel() {
        //--- variáveis do viewmodel
        var self = this;
        self.tmp = null;
        self.records = ko.observableArray();
        self.hasRecords = ko.computed(function () {
            var retVal = (self.records().length > 0);
            console.log('hasRecords: ' + retVal);
            return retVal;
        }, self);
        //--- métodos do viewmodel
        self.readRecord = function (record) {
            self.tmp = record;
            console.log('readRecord', "[" + record.date + "]");
            $("#exampleInputDate2").val(record.date);
            $("#exampleInputGordura2").val(record.gordura);
            $("#exampleInputName2").val(record.name);
            $("#exampleInputPeso2").val(record.peso);
            $("#exampleInputPbicep2").val(record.pBicep);
            $("#exampleInputPbarriga2").val(record.pBarriga);
            $("#exampleInputPcoxa2").val(record.pCoxa);
            $("#exampleInputPpeito2").val(record.pPeito);
            $("#exampleInputPombro2").val(record.pOmbro);
        };
        self.readRecords = function () {
            console.log('init');
            //--- carrega a lista com um conjunto de participantes
            self.records([
                { 'date': '2021/01/21', 'name': 'Luis Pinto Sousa', 'gordura': '20', 'peso': '91', 'pBicep': '38', 'pBarriga': '40', 'pCoxa': '60', 'pPeito': '70', 'pOmbro': '110' },
                { 'date': '2021/01/08', 'name': 'Rui Andrade', 'gordura': '13', 'peso': '87', 'pBicep': '30', 'pBarriga': '50', 'pCoxa': '70', 'pPeito': '90', 'pOmbro': '100' },
                { 'date': '2021/01/01', 'name': 'Joao Ze da Silva', 'gordura': '15', 'peso': '87', 'pBicep': '25', 'pBarriga': '30', 'pCoxa': '50', 'pPeito': '60', 'pOmbro': '80' },
                { 'date': '2021/01/18', 'name': 'Urbino Magalhaes', 'gordura': '26', 'peso': '100', 'pBicep': '38', 'pBarriga': '70', 'pCoxa': '80', 'pPeito': '90', 'pOmbro': '100' },

            ]);
            //--- ordena a lista alfabeticamente pelo nome
            self.records.sort(
                function (left, right) {
                    return left.date === right.date? 0 : (left.date < right.date ? -1 : 1)
                });
        };
    }


    ko.applyBindings(new MyViewModel());
});
