angular.module('app')

    .controller('mainCtl', ['$scope', function ($scope) {
        'use strict';

        $scope.getData = () => {

            $scope.data = {
                arrow: '../app/assets/images/bnext.png',
                description: 'ארדואינו הוא רכיב אלקטרוני שניתן לתכנות ובאמצעותו כל אחד (ללא כל נסיון קודם) יכול לגלות בדרך קלה ומרתקת את עולם האלקטרוניקה. זהו פרוייקט open source שמאפשר לכל מי שבונה פרוייקט, לשתף ולהסביר איך הוא עשה את זה צעד-צעד. יש ברשת דוגמאות רבות לפרוייקטים שאנשים חובבנים לחלוטין,                 ללא כל תואר טכנולוגי אבל עם המון אהבה וסקרנות לתחום - הצליחו לבנות באמצעות ארדואינו בכוחות עצמם',
                sensorLabel: 'סנסורים לשימוש ב Arduino:',
                instruction: 'גרור לכאן את הסנסור השכיח ביותר בביתך:',
                sensors: [{ name: 'Temperature sensor' }, { name: 'Vibration switch' }, { name: 'Hall magnetic sensor' },
                { name: 'Key switch module' }, { name: 'Infrared emission sensor module' }, { name: 'Small passive buzzer module' },
                { name: 'Laser sensor module' }, { name: 'LED SMD modules' }, { name: 'Optical broken module' },
                { name: 'Detect the heartbeat' }, { name: 'Microphone sound sensor' }, { name: 'Infrared sensor' },
                ]
            };
        };

        $scope.getData();

        $scope.favourits = {
            basket: []
        };

        $scope.currentDropElement = null;

        $scope.remove = function (l, o) {
            var index = l.indexOf(o);
            if (index > -1) {
                l.splice(index, 1);
            }
        };

        $scope.onDragOver = function (data, dragElement, dropElement) {
            $scope.currentDropElement = dropElement;
        };

        $scope.onDragLeave = function (data, dragElement, dropElement, event) {
            $scope.currentDropElement = null;
        };

        $scope.onDrop = function (data) {
            $scope.dragingBack = true;
            if (data && $scope.currentDropElement) {
                _.each($scope.data.sensors, (sensor) => {
                    if (data.name === sensor.name)
                        $scope.dragingBack = false;
                })
                if ($scope.dragingBack) {
                    $scope.data.sensors.push(data);
                    $scope.favourits.basket = [];
                }
                else {
                    if ($scope.favourits.basket.length) {
                        $scope.data.sensors.push({ name: $scope.favourits.basket[0].name })
                    }
                    $scope.favourits.basket[0] = { name: data.name };
                    $scope.remove($scope.data.sensors, data);
                }
            }
        };

        $scope.isDroped = () => {
            return $scope.favourits.basket[0].name !== '' ? 'input-wrapper-after-droped' : 'input-wrapper-droped';
        };
    }]);


//POSSIBLE TO USE THIS FUNCTIONS

// $scope.onDragStart = function () {
// };

// $scope.onDragEnd = function () {
// };