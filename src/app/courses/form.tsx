"use client"
import { useState, useEffect } from "react"
import { courses } from "@/data/courses"
import Link from "next/link"

export default function PurchaseFormModal({
  course,
}: {
  course: typeof courses[number]
}) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<"individual" | "company">("individual")
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    country: "",
    city: "",
    zip: "",
    address: "",
    taxId: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  // 🔒 blokowanie scrolla
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // ⏰ Zarządzanie cooldownem
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => {
        setCooldown(cooldown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [cooldown])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🔒 Sprawdź czy już trwa wysyłanie lub cooldown
    if (isSubmitting || cooldown > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      // Wysyłanie emaila do klienta
      const customerRes = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...formData, 
          course,
          emailType: "customer" 
        }),
      })

      // Wysyłanie emaila do admina
      const adminRes = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...formData, 
          course,
          emailType: "admin" 
        }),
      })

      if (customerRes.ok && adminRes.ok) {
        alert("✅ Order sent successfully!")
        setOpen(false)
        setFormData({
          name: "",
          companyName: "",
          country: "",
          city: "",
          zip: "",
          address: "",
          taxId: "",
          email: "",
          phone: "",
        })
        // 🔒 Ustaw cooldown na 10 sekund
        setCooldown(10)
      } else {
        alert("❌ Error sending order")
      }
    } catch (error) {
      console.error(error)
      alert("❌ Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-cyan-900 text-white px-4 py-2 hover:bg-blue-700 hover:cursor-pointer"
      >
        Join
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[70%] relative">
            {/* zamknięcie */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-7 right-7 text-gray-600 hover:text-black hover:cursor-pointer"
              disabled={isSubmitting} // 🔒 Blokuj podczas wysyłania
            >
              ✕
            </button>

            <h2 className="text-3xl font-normal mb-4 text-black w-full bg-gray-200 p-7">
              {course.title} COURSE {course.type}
              <br />
              <span className="font-bold text-cyan-900 text-2xl">
                PRICE: {course.price}
              </span>
            </h2>

            {/* 🔘 przełącznik Individual / Company */}
            <div className="flex flex-col gap-4 mb-6 ml-6 text-xl font-normal">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  value="individual"
                  checked={type === "individual"}
                  onChange={() => setType("individual")}
                  disabled={isSubmitting} // 🔒 Blokuj podczas wysyłania
                />
                Individual
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  value="company"
                  checked={type === "company"}
                  onChange={() => setType("company")}
                  disabled={isSubmitting} // 🔒 Blokuj podczas wysyłania
                />
                Company
              </label>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-row justify-between w-[95%] mx-auto gap-4 text-lg font-normal pb-10 pt-2 h-full"
            >
              {/* wspólne pola */}
              <div className="w-[30%] flex flex-col h-[80%] ">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border p-1 disabled:opacity-50"
                  required
                  disabled={isSubmitting} // 🔒 Blokuj podczas wysyłania
                />

                {type === "company" && (
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name (optional)"
                    className="border p-1 mt-2 disabled:opacity-50"
                    disabled={isSubmitting} // 🔒 Blokuj podczas wysyłania
                  />
                )}

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="border p-1 mt-2 disabled:opacity-50"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="border p-1 mt-2 disabled:opacity-50"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="ZIP Code"
                  className="border p-1 mt-2 disabled:opacity-50"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="border p-1 mt-2 disabled:opacity-50"
                  required
                  disabled={isSubmitting}
                />

                {type === "company" && (
                  <input
                    type="text"
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleChange}
                    placeholder="Tax ID"
                    className="border p-1 mt-2 disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                )}
              </div>

              <div className="w-[30%] flex flex-col h-[80%] ">
                <div className="font-bold">Course Access</div>
                <div className="mt-4 text-[14px]">
                  After placing your order, we will contact you within 24 hours to arrange payment and course access.
                </div>
                <div className="font-bold mt-8">Payment method</div>
                <div className="mt-4 text-[14px]">
                  Payment information - Bank Transfer
                </div>
              </div>

              <div className="w-[30%] flex flex-col h-full relative">
                <div className="flex-1 flex flex-col justify-start">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="border p-1 disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="border p-1 mt-3 disabled:opacity-50"

                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex flex-row space-x-2 mt-8">
                  <input
                    id="accept"
                    type="checkbox"
                    className="w-6 h-6 border-gray-300 mt-1 disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                  <label htmlFor="accept" className="text-sm text-gray-700">
                    <Link
                      href="/gdpr"
                      className="text-blue-700 underline hover:text-blue-900"
                    >
                      * I accept the terms of personal data processing for the
                      purpose of order fulfillment.
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || cooldown > 0} // 🔒 Blokuj podczas wysyłania i cooldownu
                  className={`w-[50%] ml-[47.5%] mt-[20%] px-4 py-2 ${
                    isSubmitting || cooldown > 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-cyan-900 hover:bg-blue-700 cursor-pointer"
                  } text-white`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : cooldown > 0 ? (
                    `Wait ${cooldown}s`
                  ) : (
                    "Buy"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}