import {
  defer,
  type MetaArgs,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';

export async function loader(args: LoaderFunctionArgs) {
  const {productHandle} = args.params;

  console.log('run here', productHandle);

  return new Response(null, {
    status: 200,
  });
}
