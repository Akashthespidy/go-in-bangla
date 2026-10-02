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
  title: 'Variables এবং Data Types',
  description:
    'Go-তে variable declaration, short declaration, constants এবং built-in data types সম্পর্কে বিস্তারিত আলোচনা।',
};

export default function VariablesPage() {
  const lesson = getLessonBySlug('variables-data-types');
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

      <h2>Variable কী?</h2>

      <p>
        Programming-এ <strong>variable</strong> হলো একটি named storage location যেখানে আমরা কোনো
        value সংরক্ষণ করতে পারি। মনে করুন, একটি লেবেলযুক্ত বাক্স — লেবেলটি হলো variable-এর নাম,
        আর বাক্সের ভেতরে যা আছে তা হলো value।
      </p>

      <CodeBlock
        language="go"
        filename="main.go"
        code={`package main

import "fmt"

func main() {
    name := "Akash"
    age := 27
    isDeveloper := true

    fmt.Println(name)        // Akash
    fmt.Println(age)         // 27
    fmt.Println(isDeveloper) // true
}`}
      />

      <h2>Variable Declare করার উপায়</h2>

      <h3>১. var keyword দিয়ে</h3>

      <p>
        Go-তে variable declare করার সবচেয়ে explicit উপায় হলো <code className="inline-code">var</code> keyword ব্যবহার করা।
      </p>

      <CodeBlock
        language="go"
        showLineNumbers
        code={`var name string = "Akash"
var age int = 27
var salary float64 = 85000.50
var isActive bool = true`}
      />

      <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '8px', padding: '1.25rem', margin: '1rem 0' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Pattern: <code style={{ fontFamily: 'var(--font-geist-mono)', color: 'var(--accent)' }}>var [নাম] [type] = [value]</code>
        </p>
      </div>

      <p>
        Type না দিলেও চলে — Go নিজে type বুঝে নেবে (type inference):
      </p>

      <CodeBlock
        language="go"
        code={`var name = "Akash"   // Go বুঝে নেবে এটি string
var age = 27         // Go বুঝে নেবে এটি int`}
      />

      <p>
        আবার value না দিলে Go <strong>zero value</strong> assign করে:
      </p>

      <CodeBlock
        language="go"
        code={`var name string  // "" (empty string)
var age int      // 0
var active bool  // false
var price float64 // 0.0`}
      />

      <Callout type="note" title="Zero Value">
        Go-তে uninitialized variable-এর default value থাকে — <code className="inline-code">int</code>-এর জন্য <code className="inline-code">0</code>,{' '}
        <code className="inline-code">string</code>-এর জন্য <code className="inline-code">&quot;&quot;</code>, <code className="inline-code">bool</code>-এর জন্য <code className="inline-code">false</code>।
        এটি Go-এর একটি গুরুত্বপূর্ণ বৈশিষ্ট্য যা অনেক uninitialized variable bug থেকে রক্ষা করে।
      </Callout>

      <h3>২. Short Variable Declaration (:=)</h3>

      <p>
        Function-এর ভেতরে variable declare করার সবচেয়ে সংক্ষিপ্ত এবং জনপ্রিয় উপায় হলো{' '}
        <code className="inline-code">:=</code> operator।
      </p>

      <CodeBlock
        language="go"
        code={`name := "Akash"      // var name string = "Akash" এর মতোই
age := 27            // var age int = 27 এর মতোই
salary := 85000.50   // var salary float64 = 85000.50 এর মতোই`}
      />

      <Callout type="warning">
        <code className="inline-code">:=</code> শুধুমাত্র function-এর ভেতরে ব্যবহার করা যায়।
        Package level (function-এর বাইরে) এটি ব্যবহার করলে compile error হবে।
      </Callout>

      <h3>৩. Multiple Variable Declaration</h3>

      <CodeBlock
        language="go"
        code={`// একসাথে একাধিক variable
var (
    name    string  = "Akash"
    age     int     = 27
    city    string  = "Dhaka"
)

// অথবা short declaration দিয়ে
name, age, city := "Akash", 27, "Dhaka"`}
      />

      <h2>Constants</h2>

      <p>
        যে value কখনো change হবে না, তার জন্য <code className="inline-code">const</code> ব্যবহার করুন।
      </p>

      <CodeBlock
        language="go"
        code={`const Pi = 3.14159
const AppName = "Go বাংলা"
const MaxRetries = 3

// const-এ := ব্যবহার করা যায় না
// const name := "Akash"  // ERROR!`}
      />

      <Callout type="tip">
        যে value কখনো change হওয়া উচিত নয় (যেমন Math constants, configuration values),
        সেগুলো <code className="inline-code">const</code> দিয়ে declare করুন। এটি code-এর
        intent পরিষ্কার করে।
      </Callout>

      <h2>Data Types</h2>

      <h3>Integer Types</h3>

      <CodeBlock
        language="go"
        code={`var a int = 100          // Platform-dependent (32 বা 64 bit)
var b int8 = 127         // -128 থেকে 127
var c int16 = 32767      // -32768 থেকে 32767
var d int32 = 2147483647
var e int64 = 9223372036854775807

// Unsigned integers (শুধু positive)
var f uint = 100
var g uint8 = 255        // 0 থেকে 255`}
      />

      <p>
        বেশিরভাগ ক্ষেত্রে শুধু <code className="inline-code">int</code> ব্যবহার করলেই হয়।
      </p>

      <h3>Float Types</h3>

      <CodeBlock
        language="go"
        code={`var price float32 = 9.99
var salary float64 = 85000.50

// Go-তে default floating point type হলো float64
temperature := 36.6  // এটি float64 হবে`}
      />

      <h3>String</h3>

      <CodeBlock
        language="go"
        code={`var name string = "Akash"
greeting := "আমি Go শিখছি!"

// String concatenation
fullMessage := "Hello, " + name  // "Hello, Akash"

// String length
length := len(name)  // 5

// Multi-line string
message := \`এটি
একটি
multi-line string\``}
      />

      <h3>Boolean</h3>

      <CodeBlock
        language="go"
        code={`var isLoggedIn bool = true
var hasPermission bool = false

// Comparison result
age := 27
isAdult := age >= 18  // true`}
      />

      <h2>Type Conversion</h2>

      <p>
        Go-তে automatic type conversion হয় না। আপনাকে explicitly convert করতে হবে।
      </p>

      <CodeBlock
        language="go"
        showLineNumbers
        code={`package main

import "fmt"

func main() {
    var age int = 27
    var salary float64 = float64(age) * 1000.0  // int থেকে float64

    var score float64 = 95.7
    var scoreInt int = int(score)  // float64 থেকে int (decimal cut হয়)

    fmt.Println(salary)    // 27000
    fmt.Println(scoreInt)  // 95 (না 96, decimal simply cut হয়)
}`}
      />

      <Callout type="warning">
        <code className="inline-code">int(95.7)</code> করলে <code className="inline-code">95</code> হয়, <code className="inline-code">96</code> নয়।
        Go সব সময় decimal part কেটে দেয় — round করে না।
      </Callout>

      <h2>একটি Practical Example</h2>

      <p>
        মনে করুন একটি simple e-commerce product:
      </p>

      <CodeBlock
        language="go"
        filename="product.go"
        showLineNumbers
        code={`package main

import "fmt"

func main() {
    // Product information
    productName := "Wireless Headphone"
    price := 2500.0
    quantity := 3
    inStock := true

    // Total calculation
    total := price * float64(quantity)

    fmt.Println("Product:", productName)
    fmt.Println("Price:", price)
    fmt.Println("Quantity:", quantity)
    fmt.Println("Total:", total)
    fmt.Println("In Stock:", inStock)
}`}
      />

      <p>
        এখানে লক্ষ্য করুন: <code className="inline-code">price * float64(quantity)</code> — কারণ{' '}
        <code className="inline-code">price</code> হলো <code className="inline-code">float64</code> আর{' '}
        <code className="inline-code">quantity</code> হলো <code className="inline-code">int</code>।
        Go-তে different types সরাসরি multiply করা যায় না।
      </p>

      <h2>Common Mistakes</h2>

      <CodeBlock
        language="go"
        code={`// ❌ Unused variable — compile error!
x := 10
// x ব্যবহার না করলে Go compile করবে না

// ❌ Package level-এ := ব্যবহার
// name := "Akash"  // func-এর বাইরে এটি error

// ❌ Wrong type assignment
// var age int = "27"  // string কে int-এ দেওয়া যাবে না

// ✅ সঠিক উপায়
age, name := 27, "Akash"
fmt.Println(age, name)`}
      />

      <Callout type="tip">
        Go-তে declare করা সব variable ব্যবহার করতে হবে। কোনো unused variable থাকলে
        Go compile করতে অস্বীকার করে। এটি অনেকের কাছে annoying মনে হলেও,
        এটি cleaner code লিখতে বাধ্য করে।
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
          <li>Variable হলো named storage location।</li>
          <li><code className="inline-code">var</code> দিয়ে verbose এবং explicit declaration।</li>
          <li><code className="inline-code">:=</code> দিয়ে function-এর ভেতরে short declaration।</li>
          <li><code className="inline-code">const</code> দিয়ে অপরিবর্তনীয় value।</li>
          <li>Go-এর main types: <code className="inline-code">int</code>, <code className="inline-code">float64</code>, <code className="inline-code">string</code>, <code className="inline-code">bool</code>।</li>
          <li>Uninitialized variable-এর zero value থাকে।</li>
          <li>Type conversion explicit করতে হয়।</li>
          <li>Unused variable থাকলে compile error।</li>
        </ul>
      </div>

      {/* Practice */}
      <div style={{ marginTop: '2.5rem' }}>
        <h2 style={{ marginTop: 0 }}>Practice</h2>
        <ol>
          <li>একটি variable তৈরি করুন যেখানে আপনার নাম থাকবে।</li>
          <li>একটি <code className="inline-code">const</code> তৈরি করুন — আপনার জন্মসাল।</li>
          <li>আপনার বয়স, শহর এবং পেশা — তিনটি variable একসাথে short declaration দিয়ে declare করুন।</li>
          <li>একটি program লিখুন যা টাকার পরিমাণ float64 হিসেবে নিয়ে সেটাকে int-এ convert করে print করে।</li>
        </ol>

        <Collapsible title="Solution দেখুন — সব প্রশ্ন">
          <CodeBlock
            language="go"
            filename="practice.go"
            code={`package main

import "fmt"

const birthYear = 1997

func main() {
    // প্রশ্ন ১
    name := "Akash"

    // প্রশ্ন ৩ — একসাথে declare
    age, city, profession := 27, "Dhaka", "Software Engineer"

    // প্রশ্ন ৪
    amount := 1250.75
    amountInt := int(amount)  // 1250

    fmt.Println("নাম:", name)
    fmt.Println("জন্মসাল:", birthYear)
    fmt.Println("বয়স:", age)
    fmt.Println("শহর:", city)
    fmt.Println("পেশা:", profession)
    fmt.Println("টাকা:", amount)
    fmt.Println("পূর্ণ সংখ্যায়:", amountInt)
}`}
          />
        </Collapsible>
      </div>

      <LessonProgress slug="variables-data-types" />
      <LessonNav prev={lesson.prev} next={lesson.next} />
    </article>
  );
}
