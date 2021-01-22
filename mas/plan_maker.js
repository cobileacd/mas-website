$(document).ready(function () {
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
        self.exercises = [
            { id: '0', name: 'Crucifixo', series: '', reps: '', peso: '' },
            { id: '1',name: 'Cross-over', series: '', reps: '', peso: '' },
            { id: '2',name: 'Pull-down', series: '', reps: '', peso: '' },
            { id: '3',name: 'Remada', series: '', reps: '', peso: '' },
            { id: '4',name: 'Voador', series: '', reps: '', peso: '' },
            { id: '5',name: 'Extensor', series: '', reps: '', peso: '' },
            { id: '6',name: 'Sup-reto', series: '', reps: '', peso: '' },
            { id: '7',name: 'Martelo', series: '', reps: '', peso: '' },
            { id: '8',name: 'Direto', series: '', reps: '', peso: '' },
            { id: '9',name: 'Rosca', series: '', reps: '', peso: '' },
            { id: '10',name: 'Paralela', series: '', reps: '', peso: '' },
            { id: '11',name: 'Banco', series: '', reps: '', peso: '' },
            { id: '12',name: 'Frontal', series: '', reps: '', peso: '' },
            { id: '13',name: 'Leg-press', series: '', reps: '', peso: '' }
        ];
        //--- métodos do viewmodel
        self.createRecord = function () {
            var record = { 'name': '', 'daysWeek': '', 'exercises': self.exercises };
            console.log('createRecord');
            //--- carrega um novo participante na lista
            record.name = $("#exampleInputName1").val();
            record.daysWeek = $('#createRecordModal input:checked').prop('checked', true).map(function(i,el){return el.name;}).get().join(";");
            for (i = 0; i < self.exercises.length; i++) {
                record.exercises[i].series = $("#series"+i).val();
                record.exercises[i].reps = $("#reps"+i).val();
                record.exercises[i].peso = $("#peso"+i).val();

                $("#series"+i).val('');
                $("#reps"+i).val('');
                $("#peso"+i).val('');
            }
            $('#exampleInputName1').val('');
            for (i = 1; i <= 7; i++) {
                $('#Checkbox'+i).prop('checked', false);
            }
            //--- insere novo participante na lista
            self.records.push(record);
            console.log(record);
            //--- ordena a lista alfabeticamente pelo nome
            self.records.sort(
                function (left, right) {
                    return left.date == right.name ? 0 : (left.name < right.name ? -1 : 1);
                });
            $("#createRecordModal").modal('toggle');
        };
        self.readRecord = function (record) {
            self.tmp = record;
            var daysWeek = ['2ª', '3ª', '4ª', '5ª', '6ª', 'Sab.', 'Dom.'];
            console.log('readRecord', "[" + record.name + "]");
            $("#exampleInputName2").val(record.name);
            var checkedBoxes = record.daysWeek.split(';');
            for (i = 0; i < checkedBoxes.length; i++) {
                $('#Checkbox_'+(daysWeek.indexOf(checkedBoxes[i])+1)).prop('checked', true);
            }
            for (j = 0; j < self.exercises.length; j++) {
                $('#reps_'+j).val(record.exercises[j].reps);
                $('#series_'+j).val(record.exercises[j].series);
                $('#peso_'+j).val(record.exercises[j].peso);
            }
        };
        self.readRecords = function () {
            console.log('init');
            //--- carrega a lista com um conjunto de participantes
            self.records([
                { 'name': 'Urbino Silva', 'daysWeek': '2ª;3ª', 'exercises':
                    [
                        { id: '0', name: 'Crucifixo', series: '3', reps: '12', peso: '40' },
                        { id: '1',name: 'Cross-over', series: '4', reps: '10', peso: '30' },
                        { id: '2',name: 'Pull-down', series: '5', reps: '16', peso: '45' },
                        { id: '3',name: 'Remada', series: '4', reps: '10', peso: '40' },
                        { id: '4',name: 'Voador', series: '', reps: '', peso: '' },
                        { id: '5',name: 'Extensor', series: '', reps: '', peso: '' },
                        { id: '6',name: 'Sup-reto', series: '', reps: '', peso: '' },
                        { id: '7',name: 'Martelo', series: '', reps: '', peso: '' },
                        { id: '8',name: 'Direto', series: '', reps: '', peso: '' },
                        { id: '9',name: 'Rosca', series: '', reps: '', peso: '' },
                        { id: '10',name: 'Paralela', series: '', reps: '', peso: '' },
                        { id: '11',name: 'Banco', series: '', reps: '', peso: '' },
                        { id: '12',name: 'Frontal', series: '', reps: '', peso: '' },
                        { id: '13',name: 'Leg-press', series: '', reps: '', peso: '' }
                    ]
                }
            ]);
            //--- ordena a lista alfabeticamente pelo nome
            self.records.sort(
                function (left, right) {
                    return left.name === right.name ? 0 : (left.name < right.name ? -1 : 1)
                });
        };
        self.updateRecord = function (record) {
            console.log('updateRecord', record);
            //--- remove o item selecionado para edição da lista
            self.records.remove(self.tmp);
            //--- altera o item temporário
            self.tmp.name = $("#exampleInputName2").val();
            self.tmp.daysWeek = $('#readRecordModal input:checked').prop('checked', true).map(function(i,el){return el.name;}).get().join(";");
            for (i = 0; i < self.exercises.length; i++) {
                self.tmp.exercises[i].series = $("#series_"+i).val();
                self.tmp.exercises[i].reps = $("#reps_"+i).val();
                self.tmp.exercises[i].peso = $("#peso_"+i).val();
            }
            //--- coloca novo elemento na lista
            self.records.push(self.tmp);
            //--- limpa o objeto tmp
            self.tmp = null;
            //--- ordena a lista alfabeticamente pelo nome
            self.records.sort(
                function (left, right) {
                    return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1)
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
