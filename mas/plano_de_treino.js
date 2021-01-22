var planosPorDia = [
    [
        { name: 'Crucifixo', series: '3', reps: '12', peso: '15' },
        { name: 'Cross-over', series: '3', reps: '10', peso: '10' },
        { name: 'Pull-down', series: '3', reps: '10', peso: '8' },
        { name: 'Remada', series: '3', reps: '10', peso: '30' },
        { name: 'Voador', series: '3', reps: '15', peso: '35' },
        { name: 'Extensor', series: '3', reps: '10', peso: '35' },
        { name: 'Leg-press', series: '3', reps: '10', peso: '40' }
    ],
    [
        { name: 'Cross-over', series: '3', reps: '10', peso: '10' },
        { name: 'Pull-down', series: '3', reps: '10', peso: '8' },
        { name: 'Voador', series: '3', reps: '15', peso: '35' },
        { name: 'Extensor', series: '3', reps: '10', peso: '35' },
        { name: 'Leg-press', series: '3', reps: '10', peso: '40' }
    ],
    [
        { name: 'Crucifixo', series: '3', reps: '12', peso: '15' },
        { name: 'Cross-over', series: '3', reps: '10', peso: '10' },
        { name: 'Pull-down', series: '3', reps: '10', peso: '8' },
        { name: 'Remada', series: '3', reps: '10', peso: '30' },
        { name: 'Voador', series: '3', reps: '15', peso: '35' },
    ],
    [
        { name: 'Crucifixo', series: '3', reps: '12', peso: '15' },
        { name: 'Cross-over', series: '3', reps: '10', peso: '10' },
        { name: 'Pull-down', series: '3', reps: '10', peso: '8' },
        { name: 'Remada', series: '3', reps: '10', peso: '30' },
        { name: 'Voador', series: '3', reps: '15', peso: '35' },
        { name: 'Extensor', series: '3', reps: '10', peso: '35' },
        { name: 'Leg-press', series: '3', reps: '10', peso: '40' }
    ],
    [
        { name: 'Cross-over', series: '3', reps: '10', peso: '10' },
        { name: 'Pull-down', series: '3', reps: '10', peso: '8' },
        { name: 'Voador', series: '3', reps: '15', peso: '35' },
        { name: 'Extensor', series: '3', reps: '10', peso: '35' },
        { name: 'Leg-press', series: '3', reps: '10', peso: '40' }
    ],
    [
        { name: 'Crucifixo', series: '3', reps: '12', peso: '15' },
        { name: 'Cross-over', series: '3', reps: '10', peso: '10' },
        { name: 'Pull-down', series: '3', reps: '10', peso: '8' },
        { name: 'Remada', series: '3', reps: '10', peso: '30' },
        { name: 'Voador', series: '3', reps: '15', peso: '35' },
    ],
    [
        { name: 'Cross-over', series: '3', reps: '10', peso: '10' },
        { name: 'Pull-down', series: '3', reps: '10', peso: '8' },
        { name: 'Voador', series: '3', reps: '15', peso: '35' },
        { name: 'Extensor', series: '3', reps: '10', peso: '35' },
        { name: 'Leg-press', series: '3', reps: '10', peso: '40' }
    ]
];

function AppViewModel() {
    var self = this;

    self.exercise = ko.observableArray([
        { name: 'Crucifixo', series: '3', reps: '12', peso: '15' },
        { name: 'Cross-over', series: '3', reps: '10', peso: '10' },
        { name: 'Pull-down', series: '3', reps: '10', peso: '8' },
        { name: 'Remada', series: '3', reps: '10', peso: '30' },
        { name: 'Voador', series: '3', reps: '15', peso: '35' },
        { name: 'Extensor', series: '3', reps: '10', peso: '35' },
        { name: 'Leg-press', series: '3', reps: '10', peso: '40' }
    ]);

    self.changeTable = function(i) {
        self.exercise(planosPorDia[i]);
    }
}

ko.applyBindings(new AppViewModel());
