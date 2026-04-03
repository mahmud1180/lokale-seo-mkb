import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8235444582:AAHOeUou4dc1nBHCYzYGQDFk03BszYnrX4g";
const TELEGRAM_CHAT_ID = "1972701275";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { bedrijf, website, email, telefoon } = data;

    if (!bedrijf || !website || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const message = `🌱 LOKALESEO — Nieuwe SEO-scan aanvraag!\n\n` +
      `🏢 Bedrijf: ${bedrijf}\n` +
      `🌐 Website: ${website}\n` +
      `📧 Email: ${email}\n` +
      `📞 Telefoon: ${telefoon || "Niet opgegeven"}\n\n` +
      `⏰ ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramRes.ok) {
      console.error("Telegram error:", await telegramRes.text());
      return NextResponse.json({ error: "Notification failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
