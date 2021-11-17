import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
      {/* {props.children} = berisikan component yang di bungkus oleh layout */}
    </>
  );
}
