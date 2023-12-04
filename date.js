$(document).ready(function() {
    $('#date').datepicker({
    format: 'dd/mm/yyyy',
    startDate: '01/01/2010',
    endDate: '31/12/2022',
    todayBtn: 'linked',
    todayHighlight: true,
    autoclose: true
    });
    });