/**
 * Created by Wonpang New on 2016/9/10.
 *
 *  全部分支流水线
 */

define(['app'], function (app) {
    'use strict';

    app.controller('BranchesController', [
        '$scope',
        '$location',
        '$state',
        'pipelineContextService',
        BranchesController
    ]);

    function BranchesController($scope, $location, $state, pipelineContextService) {
        var self = this;
        pipelineContextService.setBranchType('BRANCH');
        self.context = pipelineContextService.context;
    }
});