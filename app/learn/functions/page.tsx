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
  title: 'Functions',
  description:
    'Go-তে function declaration, parameters, return values, multiple return values এবং real-world backend patterns।',
};

export default function FunctionsPage() {
  const lesson = getLessonBySlug('functions');
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

      <h2>Function কী এবং কেন দরকার?</h2>

      <p>
        <strong>Function</strong> হলো একটি named block of code যা specific কাজ করে। একই কাজ
        বারবার না লিখে, একটি function তৈরি করে সেটিকে যতবার প্রয়োজন ততবার call করা যায়।
      </p>

      <p>
        ধরুন, আপনার একটি backend application-এ বিভিন্ন জায়গায় দুটো সংখ্যার যোগফল দরকার।
        Function ছাড়া আপনাকে একই code বারবার লিখতে হতো। Function দিয়ে একবার লিখলেই যথেষ্ট:
      </p>

      <CodeBlock
        language="go"
        filename="main.go"
        showLineNumbers
        code={`package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(5, 3)
    fmt.Println(result)  // 8

    // যতবার দরকার ততবার call করুন
    fmt.Println(add(10, 20))  // 30
    fmt.Println(add(100, 200))  // 300
}`}
      />

      <h2>Function-এর Structure</h2>

      <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)', borderRadius: '8px', padding: '1.25rem', margin: '1rem 0' }}>
        <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <code style={{ color: 'var(--syntax-keyword)', fontFamily: 'var(--font-geist-mono)', fontSize: '0.875rem' }}>func</code>
          <p style={{ marginTop: '0.4rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Function declare করার keyword।
          </p>
        </div>
        <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <code style={{ color: 'var(--syntax-function)', fontFamily: 'var(--font-geist-mono)', fontSize: '0.875rem' }}>add</code>
          <p style={{ marginTop: '0.4rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Function-এর নাম। নামটি lowercase দিয়ে শুরু হলে package-private, uppercase দিয়ে শুরু হলে exported (public)।
          </p>
        </div>
        <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <code style={{ color: 'var(--syntax-type)', fontFamily: 'var(--font-geist-mono)', fontSize: '0.875rem' }}>a int, b int</code>
          <p style={{ marginTop: '0.4rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Parameters — যে values function-এ দেওয়া হবে। প্রতিটির নাম এবং type দিতে হয়।
          </p>
        </div>
        <div>
          <code style={{ color: 'var(--syntax-type)', fontFamily: 'var(--font-geist-mono)', fontSize: '0.875rem' }}>int</code>{' '}
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>(শেষের)</span>
          <p style={{ marginTop: '0.4rem', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Return type — function কী ধরনের value return করবে।
          </p>
        </div>
      </div>

      <h2>Parameters</h2>

      <p>
        Same type-এর consecutive parameters-কে একসাথে লেখা যায়:
      </p>

      <CodeBlock
        language="go"
        code={`// দীর্ঘ উপায়
func add(a int, b int) int { return a + b }

// সংক্ষিপ্ত উপায় — same type হলে
func add(a, b int) int { return a + b }

// Mixed types
func greet(name string, age int) string {
    return "Hello " + name
}`}
      />

      <h2>Return Values</h2>

      <h3>Single Return Value</h3>

      <CodeBlock
        language="go"
        code={`func square(n int) int {
    return n * n
}

result := square(5)  // 25`}
      />

      <h3>Multiple Return Values ⭐</h3>

      <p>
        Go-এর একটি অত্যন্ত শক্তিশালী feature হলো function থেকে একাধিক value return করা।
        এটি Go-কে অন্য languages থেকে আলাদা করে।
      </p>

      <CodeBlock
        language="go"
        showLineNumbers
        code={`package main

import (
    "errors"
    "fmt"
)

// দুটি value return করছে: result এবং error
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("শূন্য দিয়ে ভাগ করা যাবে না")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 3)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("%.2f\n", result)  // 3.33
}`}
      />

      <p>
        লক্ষ্য করুন: Go-তে error handling এভাবেই করা হয়। Exception throw করার বদলে
        function সরাসরি error return করে।
      </p>

      <Callout type="note" title="Go-এর Error Handling Pattern">
        Go-তে error handle করার idiomatic way হলো function থেকে <code className="inline-code">(result, error)</code>{' '}
        return করা। Caller তখন error check করে proceed করে।
        এটি Go কোড-কে explicit এবং predictable করে তোলে।
      </Callout>

      <h3>Named Return Values</h3>

      <CodeBlock
        language="go"
        code={`func minMax(nums []int) (min, max int) {
    min = nums[0]
    max = nums[0]
    for _, n := range nums {
        if n < min { min = n }
        if n > max { max = n }
    }
    return  // named হওয়ায় bare return করা যায়
}`}
      />

      <Callout type="tip">
        Named return values documentation হিসেবে ভালো কাজ করে — function কী return করছে তা
        signature দেখলেই বোঝা যায়। তবে short function ছাড়া bare return এড়ানো উচিত।
      </Callout>

      <h2>Realistic Backend Example</h2>

      <p>
        Backend application-এ functions কীভাবে কাজ করে, তার একটি practical উদাহরণ দেখা যাক।
        মনে করুন, একটি simple order calculation system:
      </p>

      <CodeBlock
        language="go"
        filename="order.go"
        showLineNumbers
        code={`package main

import "fmt"

// Product-এর total price calculate করে
func calculateTotal(price float64, quantity int) float64 {
    return price * float64(quantity)
}

// Discount apply করে
func applyDiscount(total float64, discountPercent float64) float64 {
    discount := total * (discountPercent / 100)
    return total - discount
}

// Tax যোগ করে এবং final amount return করে
func calculateFinalAmount(price float64, quantity int, discountPercent float64) (float64, float64) {
    total := calculateTotal(price, quantity)
    afterDiscount := applyDiscount(total, discountPercent)
    tax := afterDiscount * 0.05  // 5% VAT
    finalAmount := afterDiscount + tax
    return finalAmount, tax
}

func main() {
    price := 1500.0      // per unit price
    quantity := 4
    discount := 10.0     // 10% discount

    finalAmount, tax := calculateFinalAmount(price, quantity, discount)

    fmt.Printf("Subtotal: %.2f\n", calculateTotal(price, quantity))
    fmt.Printf("Tax (5%% VAT): %.2f\n", tax)
    fmt.Printf("Final Amount: %.2f\n", finalAmount)
}`}
      />

      <p>এই উদাহরণে লক্ষ্য করুন:</p>
      <ul>
        <li>প্রতিটি function একটিমাত্র কাজ করছে (<em>single responsibility</em>)।</li>
        <li>Functions একে অপরকে call করছে — composition।</li>
        <li><code className="inline-code">calculateFinalAmount</code> দুটি value return করছে।</li>
        <li>Code readable এবং maintainable।</li>
      </ul>

      <h2>Functions এবং Scope</h2>

      <CodeBlock
        language="go"
        code={`var globalVar = "আমি সব জায়গা থেকে দেখা যাই"

func greet(name string) {
    localVar := "আমি শুধু এই function-এর ভেতরে"
    fmt.Println(globalVar)  // ✅ OK
    fmt.Println(localVar)   // ✅ OK
    fmt.Println(name)       // ✅ OK
}

func anotherFunc() {
    fmt.Println(globalVar)  // ✅ OK
    // fmt.Println(localVar)  // ❌ ERROR - localVar এখানে নেই
}`}
      />

      <Callout type="warning">
        Function-এর ভেতরে declare করা variable শুধু সেই function-এর scope-এ থাকে।
        বাইরে থেকে access করা যায় না।
      </Callout>

      <h2>Common Mistakes</h2>

      <CodeBlock
        language="go"
        code={`// ❌ Return type declare করা হয়েছে কিন্তু return নেই
func add(a, b int) int {
    sum := a + b
    // return ভুলে গেছি! Compile error।
}

// ❌ Wrong return type
func getName() string {
    return 42  // int return করা যাবে না, string expect করছে
}

// ✅ সঠিক
func add(a, b int) int {
    return a + b
}`}
      />

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
          <li>Function হলো reusable named block of code।</li>
          <li>Syntax: <code className="inline-code">func নাম(params) returnType {'{'}...{'}'}</code></li>
          <li>Same type parameters একসাথে লেখা যায়: <code className="inline-code">a, b int</code></li>
          <li>Go-তে multiple return values সম্ভব — এটি error handling-এ ব্যবহৃত হয়।</li>
          <li>Go-এর error handling pattern: <code className="inline-code">(result, error)</code> return।</li>
          <li>Named return values documentation এবং readability উন্নত করে।</li>
          <li>Function-এর variable-এর scope শুধু সেই function-এ।</li>
          <li>Uppercase দিয়ে শুরু হলে exported (public), lowercase হলে package-private।</li>
        </ul>
      </div>

      {/* Practice */}
      <div style={{ marginTop: '2.5rem' }}>
        <h2 style={{ marginTop: 0 }}>Practice</h2>
        <ol>
          <li>একটি function লিখুন যা দুটো সংখ্যার গুণফল return করে।</li>
          <li>একটি function লিখুন যা একটি string নিয়ে সেটির দৈর্ঘ্য এবং uppercase version return করে (দুটো value)।</li>
          <li>একটি function লিখুন <code className="inline-code">safeDivide</code> যা দুটো number নিয়ে division করে। যদি divisor <code className="inline-code">0</code> হয়, error return করুন।</li>
          <li>উপরের order calculation example-কে extend করুন — shipping cost (<code className="inline-code">float64</code>) parameter হিসেবে নিন এবং final amount-এ যোগ করুন।</li>
        </ol>

        <Collapsible title="Solution দেখুন — প্রশ্ন ১, ২, ৩">
          <CodeBlock
            language="go"
            filename="practice.go"
            code={`package main

import (
    "errors"
    "fmt"
    "strings"
)

// প্রশ্ন ১ — গুণফল
func multiply(a, b int) int {
    return a * b
}

// প্রশ্ন ২ — string length এবং uppercase
func stringInfo(s string) (int, string) {
    return len(s), strings.ToUpper(s)
}

// প্রশ্ন ৩ — safe division
func safeDivide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("শূন্য দিয়ে ভাগ করা যাবে না")
    }
    return a / b, nil
}

func main() {
    fmt.Println(multiply(4, 5))  // 20

    length, upper := stringInfo("akash")
    fmt.Println(length, upper)  // 5 AKASH

    result, err := safeDivide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(result)
    }
}`}
          />
        </Collapsible>
      </div>

      <div
        style={{
          marginTop: '2rem',
          padding: '1.25rem',
          background: 'var(--accent-muted)',
          border: '1px solid var(--accent)',
          borderRadius: '8px',
          opacity: 0.8,
        }}
      >
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--accent-text)' }}>পরবর্তীতে:</strong>{' '}
          Structs শিখব — Go-তে কীভাবে complex data structure তৈরি করা হয়।
          Structs দিয়ে আমরা আমাদের <code className="inline-code">Product</code>, <code className="inline-code">User</code>,{' '}
          <code className="inline-code">Order</code> — এই ধরনের real-world entities represent করব।
        </p>
      </div>

      <LessonProgress slug="functions" />
      <LessonNav prev={lesson.prev} next={lesson.next} />
    </article>
  );
}
