import {component$, Resource} from '@builder.io/qwik';
import {Link, RequestHandler, useEndpoint} from "@builder.io/qwik-city";

interface Stuff {
  href: string
}

export default component$(() => {
  const endpoint = useEndpoint<Stuff>()

  return <Resource value={endpoint} onResolved={(thing) => <Link href={thing.href}>Click me</Link>}/>
});

export const onGet: RequestHandler<Stuff> = () => {
  return { href: "/hello-world" }
}