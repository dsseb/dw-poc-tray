import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { DocuwareAuth } from '../DocuwareAuth';
import { globalConfigHttp } from '../GlobalConfig';
import { GetFileCabinetsInput } from './input';
import { GetFileCabinetsOutput } from './output';

export const getFileCabinetsHandler =
	OperationHandlerSetup.configureHandler<
		DocuwareAuth,
		GetFileCabinetsInput,
		GetFileCabinetsOutput
	>((handler) =>
		handler.withGlobalConfiguration(globalConfigHttp).usingHttp((http) =>
			http
				.get('/FileCabinets')
				.handleRequest((ctx, input, request) => {
					request = request
					.addHeader('Accept', 'application/json')
					.addHeader('Accept-Encoding', 'gzip, deflate, br')
					//.withBearerToken(ctx.auth!.user.access_token)
					return request.withoutBody();
					//request.addPathParameter('id', input.id.toString()).withoutBody()
				})
				.handleResponse((ctx, input, response) => {

					return response.parseWithBodyAsJson();
					// const parsedResponse = response.parseWithBodyAsJson();
					// if (input.include_document_trays)
					// {
					// 	return parsedResponse;
					// }
					// else
					// {

        	// 	const filteredFileCabinet = ( fileCabinet || []).filter((cabinet: any) => !cabinet.IsBasket);
					// 	return {
					// 			FileCabinet: filteredFileCabinet
					// 	};
					// }

				})
		)
	);
