export default function MethodsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#800000] mb-6">Methods</h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-10">
          AskSorSU was developed using a combination of supervised learning and
          reinforcement learning to ensure accuracy, clarity, and helpfulness
          for Sorsogon State University students.
        </p>

        {/* Card */}
        <div className="bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-8 space-y-8">
          {/* Supervised Learning */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              🟦 Supervised Fine-Tuning
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Human trainers created example conversations where they played the
              role of both the student and the AskSorSU assistant. These guided
              conversations shaped how the model responds to university-related
              questions such as enrollment, campus details, academics, and
              processes.
            </p>
          </div>

          {/* Reward Model */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              🟩 Reward Model Creation
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trainers reviewed multiple AI-generated responses and ranked them
              from best to worst. These rankings helped build a reward model
              that taught AskSorSU what good, helpful answers look like.
            </p>
          </div>

          {/* Reinforcement Learning */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              🟧 Reinforcement Learning (RLHF)
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Using the reward model, the system was improved through
              Reinforcement Learning from Human Feedback (RLHF). This technique
              allowed AskSorSU to improve tone, clarity, and reliability using
              methods like Proximal Policy Optimization.
            </p>
          </div>

          {/* Iterative Process */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              🔁 Iterative Improvements
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The training process was repeated multiple times to refine the
              quality of responses, ensuring AskSorSU could properly assist SSU
              students, faculty, and staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
