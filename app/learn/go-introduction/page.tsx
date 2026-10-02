import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLessonBySlug } from '../../lib/lessons';
import { LessonHeader } from '../../components/LessonHeader';
import { CodeBlock } from '../../components/CodeBlock';
import { Callout } from '../../components/Callout';
import { LessonNav } from '../../components/LessonNav';
import { LessonProgress } from '../../components/LessonProgress';
import { Collapsible } from '../../components/Collapsible';

export const metadata: Metadata = {
  title: 'Go কী এবং কেন Go?',
  description:
    'Go programming language-এর পরিচয়, ইতিহাস, বৈশিষ্ট্য এবং কেন এটি backend development-এ এত জনপ্রিয়।',
};

export default function GoIntroductionPage() {
  const lesson = getLessonBySlug('go-introduction');
  if (!lesson) notFound();

  return (
    <article
      className="lesson-prose"
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem)',
        paddingBottom: '4rem',
      }}
    >
      <LessonHeader lesson={lesson} />

      {/* ─── CONTENT ─── */}

      <h2>Go কী?</h2>

      <p>
        <strong>Go</strong> (অথবা <strong>Golang</strong>) হলো একটি open-source, compiled, statically-typed
        programming language। এটি তৈরি করেছে <strong>Google</strong>।
      </p>

      <p>
        Go তৈরির পেছনে মূল কারণ ছিল — Google-এর large-scale distributed systems পরিচালনা করতে গিয়ে
        তৎকালীন programming language-গুলো (C++, Java, Python) নানা সমস্যা তৈরি করছিল। Compilation slow
        ছিল, concurrency জটিল ছিল, এবং codebase বড় হলে maintain করা কঠিন হয়ে যাচ্ছিল।
      </p>

      <Callout type="note" title="Go-এর জন্মের গল্প">
        ২০০৭ সালে Google-এর Robert Griesemer, Rob Pike এবং Ken Thompson মিলে Go তৈরির কাজ শুরু করেন।
        ২০০৯ সালে এটি publicly release হয়। Ken Thompson C এবং Unix-এরও co-creator।
      </Callout>

      <h2>Go কেন তৈরি করা হয়েছিল?</h2>

      <p>
        Google-এর engineers C++ এবং Java ব্যবহার করে frustrated হয়ে গিয়েছিলেন কারণ:
      </p>

      <ul>
        <li>C++ compilation অনেক slow ছিল।</li>
        <li>Java-তে concurrency লেখা জটিল এবং verbose।</li>
        <li>Python fast to write কিন্তু production-scale-এ slow।</li>
        <li>আলাদা আলাদা language-এ team fragmented হয়ে যাচ্ছিল।</li>
      </ul>

      <p>
        তারা চেয়েছিলেন এমন একটি language যা:
      </p>

      <ul>
        <li>C-এর মতো fast compile করবে।</li>
        <li>Python-এর মতো সহজে লেখা যাবে।</li>
        <li>Modern concurrency সহজ করবে।</li>
        <li>Large codebase-এ কাজ করার উপযুক্ত হবে।</li>
      </ul>

      <h2>Go-এর Major বৈশিষ্ট্যসমূহ</h2>

      <h3>১. Compiled Language</h3>

      <p>
        Go একটি <strong>compiled language</strong>। তার মানে আপনি যে code লিখবেন, সেটি প্রথমে
        machine-readable binary-তে compile হবে, তারপর চলবে।
      </p>

      <p>
        Python বা JavaScript-এর মতো interpreted language-এ code চলার সময় প্রতিটি line পড়া হয়।
        Go-তে একবার compile হয়ে গেলে সরাসরি CPU তে চলে — তাই অনেক বেশি fast।
      </p>

      <CodeBlock
        language="bash"
        filename="terminal"
        code={`# Go code compile করুন
go build main.go

# অথবা সরাসরি run করুন
go run main.go`}
      />

      <h3>২. Statically Typed Language</h3>

      <p>
        Go <strong>statically typed</strong>। এর মানে হলো প্রতিটি variable-এর type compile time-এ
        জানা থাকে। আপনি যদি ভুল type assign করেন, Go compile হবেই না।
      </p>

      <p>
        এটি দেখতে একটু কঠিন মনে হলেও, বাস্তবে এটি অনেক bug আগেই ধরে ফেলে।
      </p>

      <CodeBlock
        language="go"
        filename="main.go"
        code={`package main

import "fmt"

func main() {
    var age int = 27        // type clearly defined
    var name string = "Akash"
    
    fmt.Println(name, age)  // Akash 27
}`}
      />

      <h3>৩. Simplicity</h3>

      <p>
        Go-তে features ইচ্ছাকৃতভাবে কম রাখা হয়েছে। কোনো class নেই, কোনো inheritance নেই,
        কোনো generics overengineering নেই। ফলে code পড়া এবং বোঝা অনেক সহজ।
      </p>

      <Callout type="tip">
        Go-তে একটি জনপ্রিয় নীতি আছে: <strong>&quot;There should be only one way to do something.&quot;</strong>{' '}
        এতে team-এর সবার code একই style-এ থাকে।
      </Callout>

      <h3>৪. Built-in Concurrency</h3>

      <p>
        আধুনিক backend application-এ একসাথে হাজার হাজার request handle করতে হয়।
        Go-তে এটি করা অনেক সহজ — <strong>goroutine</strong> এবং <strong>channel</strong> ব্যবহার করে।
      </p>

      <p>
        Goroutine হলো Go-এর lightweight thread। একটি সাধারণ thread যেখানে কয়েক MB memory নেয়,
        সেখানে একটি goroutine মাত্র ~2KB নেয়।
      </p>

      <CodeBlock
        language="go"
        code={`// goroutine দিয়ে concurrent কাজ
go doSomething() // 'go' keyword দিয়ে goroutine তৈরি`}
      />

      <p>এই বিষয়ে পরে বিস্তারিত আলোচনা হবে।</p>

      <h3>৫. Fast Compilation</h3>

      <p>
        Go এত দ্রুত compile হয় যে অনেক সময় interpreted language-এর মতোই feel হয়।
        হাজার হাজার line-এর code seconds-এর মধ্যে compile হয়ে যায়।
      </p>

      <h2>Go কোথায় ব্যবহার হয়?</h2>

      <p>
        Go বর্তমানে backend development-এ অত্যন্ত জনপ্রিয়। বড় বড় কোম্পানি Go ব্যবহার করছে:
      </p>

      <ul>
        <li><strong>Google</strong> — নিজেই তৈরি করেছে, production-এ ব্যাপকভাবে ব্যবহার করে।</li>
        <li><strong>Uber</strong> — ride-sharing backend।</li>
        <li><strong>Docker</strong> — container technology সম্পূর্ণ Go-তে লেখা।</li>
        <li><strong>Kubernetes</strong> — container orchestration, Go-তে লেখা।</li>
        <li><strong>Cloudflare</strong> — high-performance networking।</li>
        <li><strong>Dropbox</strong> — storage backend।</li>
      </ul>

      <Callout type="note" title="Backend কেন?">
        Go-এর concurrency model, fast execution, এবং low memory footprint backend microservices
        এবং distributed systems-এর জন্য ideal। এজন্য এটি backend engineers-দের মধ্যে এত জনপ্রিয়।
      </Callout>

      <h2>আমার প্রথম Go প্রোগ্রাম</h2>

      <p>
        একটি traditional &ldquo;Hello, World!&rdquo; program দেখা যাক:
      </p>

      <CodeBlock
        language="go"
        filename="main.go"
        showLineNumbers
        code={`package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
    fmt.Println("আমি Go শিখছি!")
}`}
      />

      <p>প্রতিটি line বুঝি:</p>

      <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '8px', padding: '1.25rem', margin: '1rem 0' }}>
        <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <code style={{ color: 'var(--syntax-keyword)', fontFamily: 'var(--font-geist-mono)', fontSize: '0.875rem' }}>package main</code>
          <p style={{ marginTop: '0.4rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            প্রতিটি Go file একটি package-এর অন্তর্গত। <code className="inline-code">main</code> package-ই
            executable program-এর starting point।
          </p>
        </div>
        <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <code style={{ color: 'var(--syntax-keyword)', fontFamily: 'var(--font-geist-mono)', fontSize: '0.875rem' }}>import &quot;fmt&quot;</code>
          <p style={{ marginTop: '0.4rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <code className="inline-code">fmt</code> হলো Go-এর standard library package, যা formatted
            input/output-এর জন্য ব্যবহৃত হয়।
          </p>
        </div>
        <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <code style={{ color: 'var(--syntax-function)', fontFamily: 'var(--font-geist-mono)', fontSize: '0.875rem' }}>func main()</code>
          <p style={{ marginTop: '0.4rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <code className="inline-code">main</code> function হলো program-এর entry point। Program run
            করলে এখান থেকেই শুরু হয়।
          </p>
        </div>
        <div>
          <code style={{ color: 'var(--syntax-function)', fontFamily: 'var(--font-geist-mono)', fontSize: '0.875rem' }}>fmt.Println(...)</code>
          <p style={{ marginTop: '0.4rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Console-এ text print করে, শেষে automatically new line যোগ করে।
          </p>
        </div>
      </div>

      <Callout type="warning">
        Go-তে unused import থাকলে compile error হবে। <code className="inline-code">fmt</code> import
        করে যদি ব্যবহার না করেন, Go compile করতে দেবে না।
      </Callout>

      {/* Summary */}
      <div
        style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-primary)',
          borderRadius: '10px',
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: '1.15rem' }}>আজকে যা শিখলাম</h2>
        <ul style={{ marginBottom: 0 }}>
          <li>Go হলো Google-এর তৈরি একটি open-source, compiled, statically-typed language।</li>
          <li>২০০৯ সালে release হয়েছে Robert Griesemer, Rob Pike এবং Ken Thompson-এর হাতে।</li>
          <li>Go fast, simple এবং built-in concurrency সহ আসে।</li>
          <li>Docker, Kubernetes, Uber — সবাই Go ব্যবহার করছে।</li>
          <li>প্রতিটি Go program <code className="inline-code">package main</code> এবং <code className="inline-code">func main()</code> দিয়ে শুরু হয়।</li>
        </ul>
      </div>

      {/* Practice */}
      <div style={{ marginTop: '2.5rem' }}>
        <h2 style={{ marginTop: 0 }}>Practice</h2>
        <p>নিচের প্রশ্নগুলো ভেবে দেখুন:</p>
        <ol>
          <li>Go কে তৈরি করেছে এবং কেন তৈরি করা হয়েছিল?</li>
          <li>Compiled language আর interpreted language-এর মধ্যে পার্থক্য কী?</li>
          <li>Goroutine কী এবং এটি কেন regular thread-এর চেয়ে ভালো?</li>
          <li>নিজে একটি Go program লিখুন যা আপনার নাম print করে।</li>
        </ol>

        <Collapsible title="Solution দেখুন — প্রশ্ন ৪">
          <CodeBlock
            language="go"
            filename="main.go"
            code={`package main

import "fmt"

func main() {
    fmt.Println("আমার নাম Akash")
    fmt.Println("আমি Go শিখছি!")
}`}
          />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
            শুধু <code className="inline-code">fmt.Println()</code>-এ আপনার নাম দিয়ে দিলেই হয়ে যায়।
            Go-তে string সবসময় double quote (<code className="inline-code">&quot;&quot;</code>)-এর মধ্যে লিখতে হয়।
          </p>
        </Collapsible>
      </div>

      <LessonProgress slug="go-introduction" />
      <LessonNav prev={lesson.prev} next={lesson.next} />
    </article>
  );
}
