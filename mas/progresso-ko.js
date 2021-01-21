$(document).ready(function () {
    //--- variáveis globais
    //--- funções globais
    $("#exampleInputDate1").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: 'yy/mm/dd',
        yearRange: "-10:+10"
    });
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
        self.createRecord = function () {
            var record = { 'date': '', 'gordura': '', 'peso': '', 'pBicep': '', 'pBarriga': '', 'pCoxa': '', 'pPeito': '', 'pOmbro': '' };
            console.log('createRecord');
            //--- carrega um novo participante na lista
            record.date = $("#exampleInputDate1").val();
            record.gordura = $("#exampleInputGordura").val();
            record.peso= $("#exampleInputPeso").val();
            record.pBicep = $("#exampleInputPbicep").val();
            record.pBarriga = $("#exampleInputPbarriga").val();
            record.pCoxa = $("#exampleInputPcoxa").val();
            record.pPeito = $("#exampleInputPpeito").val();
            record.pOmbro = $("#exampleInputPombro").val();
            //--- insere novo participante na lista
            self.records.push(record);
            console.log(record);
            //--- ordena a lista alfabeticamente pelo nome
            self.records.sort(
                function (left, right) {
                    return left.date == right.date ? 0 : (left.date < right.date ? -1 : 1);
                });
            $("#createRecordModal").modal('toggle');

            $("#exampleInputDate1").val('');
            $("#exampleInputGordura").val('');
            $("#exampleInputPeso").val('');
            $("#exampleInputPbicep").val('');
            $("#exampleInputPbarriga").val('');
            $("#exampleInputPcoxa").val('');
            $("#exampleInputPpeito").val('');
            $("#exampleInputPombro").val('');
        };
        self.readRecord = function (record) {
            self.tmp = record;
            console.log('readRecord', "[" + record.date + "]");
            $("#exampleInputDate2").val(record.date);
            $("#exampleInputGordura2").val(record.gordura);
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
                { 'date': '2021/01/21', 'gordura': '20', 'peso': '87', 'pBicep': '30', 'pBarriga': '50', 'pCoxa': '70', 'pPeito': '90', 'pOmbro': '100' }
            ]);
            //--- ordena a lista alfabeticamente pelo nome
            self.records.sort(
                function (left, right) {
                    return left.date === right.date? 0 : (left.date < right.date ? -1 : 1)
                });
        };
        self.updateRecord = function (record) {
            console.log('updateRecord', record);
            //--- remove o item selecionado para edição da lista
            self.records.remove(self.tmp);
            //--- altera o item temporário
            self.tmp.date = $("#exampleInputDate2").val();
            self.tmp.gordura = $("#exampleInputGordura2").val();
            self.tmp.peso = $("#exampleInputPeso2").val();
            self.tmp.pBicep = $("#exampleInputPbicep2").val();
            self.tmp.pBarriga = $("#exampleInputPbarriga2").val();
            self.tmp.pCoxa = $('#exampleInputPcoxa2').val();
            self.tmp.pPeito = $('#exampleInputPpeito2').val();
            self.tmp.pOmbro = $('#exampleInputPombro2').val();
            //--- coloca novo elemento na lista
            self.records.push(self.tmp);
            //--- limpa o objeto tmp
            self.tmp = null;
            //--- ordena a lista alfabeticamente pelo nome
            self.records.sort(
                function (left, right) {
                    return left.date == right.date? 0 : (left.date < right.date? -1 : 1)
                });
            //--- apaga a modal
            $("#readRecordModal").modal('toggle');
            //--- debug
            console.log(self.records());
        };
        self.deleteRecords = function () {
            console.log('deleteRecords');
            //--- apaga todos os participantes da lista
            self.records.removeAll();
        };
        self.deleteRecord = function (record) {
            console.log('deleteRecord');
            //--- apaga um participante da lista
            self.records.remove(record);
        };
    }


    ko.applyBindings(new MyViewModel());
});
