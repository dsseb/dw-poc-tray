import { OperationHandlerTestSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerTest';
import { OperationHandlerResult } from '@trayio/cdk-dsl/connector/operation/OperationHandler';
import { getFileCabinetsHandler } from './handler';
import '@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner';

OperationHandlerTestSetup.configureHandlerTest(
	getFileCabinetsHandler,
	(handlerTest) =>
		handlerTest
			.usingHandlerContext('test')
			.nothingBeforeAll()
			.testCase('Should get file cabinets', (testCase) =>
				testCase
					.givenNothing()
					.when(() => ({ include_document_trays: false }))
					.then(({ output }) => {
						var outputValue = OperationHandlerResult.getSuccessfulValueOrFail(output);
						expect(outputValue.FileCabinet).toBeDefined();
					})
					.finallyDoNothing()
			)
			.nothingAfterAll()
);
